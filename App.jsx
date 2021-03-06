import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import Amplify, { Storage } from 'aws-amplify';
import configureStore from './store/configureStore';
import awsconfig from './aws-exports';

import Exhibit from './models/Exhibit';

import AppNavigator from './navigation/AppNavigator';
import MediaPlayer from './components/MediaPlayer';

// Initialize redux store and info about our S3 bucket.
const store = configureStore();
Amplify.configure(awsconfig);

// Fetches the JSON file specified by the provided filePath from S3 and adds
// its contents to the ith object in exhibitList.
const addInfo = (filePath, exhibitList, i) => new Promise((resolve, reject) => {
  Storage.get(filePath)
    .then((url) => fetch(url))
    .then((res) => res.json())
    .then((data) => {
      const curExhibit = exhibitList[i];

      curExhibit.title = data.title;
      curExhibit.author = data.author;
      curExhibit.description = data.description;

      resolve();
    })
    .catch((err) => reject(err));
});

// Fetches the image specified by the provided filePath from S3, generates a
// URL which points to that image, and adds that URL to the ith object in
// exhibitList's list of image URLs.
const addImage = (filePath, exhibitList, i) => new Promise((resolve, reject) => {
  Storage.get(filePath)
    .then((url) => {
      const curExhibit = exhibitList[i];

      if (curExhibit.images === undefined) {
        curExhibit.images = [];
      }

      curExhibit.images.push(url);
      resolve();
    })
    .catch((err) => reject(err));
});

// Constructs a list of exhibit objects. Returns a Promise.
//
// Each exhibit object, or item in the list returned, looks like this:
// {
//   "title": "Exhibit Title",
//   "author": "Author name",
//   "description": "More information about the exhibit.",
//   "images": ["awsImageURL1", "awsImageURL2", etc...]
// }
const constructExhibitList = (s3Contents) => new Promise((resolve, reject) => {
  const exhibitList = [];
  const promises = [];

  // Begin at -1 because when we encouter a new directory, we increment
  // curExhibitIndex. When we encounter our first directory and increment
  // this variable, we want curExhibitIndex = 0.
  let curExhibitIndex = -1;

  // First list item is always for the root, or "public," directory. We can
  // ignore this, so we start the loop at i = 1.
  for (let i = 1; i < s3Contents.length; i += 1) {
    const curS3Object = s3Contents[i];
    const curObjFilePath = curS3Object.key;

    // Check to see if the current item we're on is a directory.
    if (curS3Object.size === 0) {
      curExhibitIndex += 1;
      exhibitList[curExhibitIndex] = new Exhibit();
    } else {
      // Strip out the file extension.
      const fileExt = curObjFilePath.match(/\.[0-9a-z]+$/i)[0].substr(1);

      if (fileExt.localeCompare('json') === 0) {
        promises.push(addInfo(curObjFilePath, exhibitList, curExhibitIndex));
      } else {
        // This file isn't JSON, so it must be an image.
        promises.push(addImage(curObjFilePath, exhibitList, curExhibitIndex));
      }
    }
  }

  // Wait for all of the promises to resolve. By then, the output array will
  // be populated.
  Promise.all(promises)
    .then(() => {
      resolve(exhibitList);
    })
    .catch((err) => reject(err));
});

const handleLoadingError = (error) => {
  // Might want to report this error to some logging service, or change the
  // content that's displayed which notifies the user of some problem that
  // happened.
  console.error(error);
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [exhibitList, setExhibitList] = useState([]);

  useEffect(() => {
    // Traverses our S3 bucket's entire file system & fetches all images and
    // metadata associated with each exhibit.
    Storage.list('')
      .then((data) => constructExhibitList(data))
      .then((list) => {
        setExhibitList(list);
        setIsLoading(false);
      })
      .catch((err) => handleLoadingError(err));
  }, []);

  let content;
  if (isLoading) {
    content = (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading exhibits...</Text>
      </View>
    );
  } else {
    content = (
      <>
        <AppNavigator exhibitList={exhibitList} />
        <MediaPlayer />
      </>
    );
  }

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        { content }
      </SafeAreaProvider>
    </Provider>
  );
}
