import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

import Card from './components/Card';
import Title from './components/Title';

import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// Constructs a list of exhibit objects. Returns a Promise.
//
// Each exhibit object, or item in the list returned, looks like this:
// {
//   "title": "Exhibit Title",
//   "author": "Author name",
//   "description": "More information about the exhibit.",
//   "images": ["awsImageURL1", "awsImageURL2", etc...]
// }
const constructExhibitList = (s3Contents) => {
  return new Promise((resolve, reject) => {
    let exhibitList = [];
    let promises = [];

    // Begin at -1 because when we encouter a new directory, we increment
    // curExhibitIndex. When we encounter our first directory and increment
    // this variable, we want curExhibitIndex = 0.
    let curExhibitIndex = -1;

    // First list item is always for the root, or "public," directory. We can
    // ignore this, so we start the loop at i = 1.
    for (let i = 1; i < s3Contents.length; i++) {
      const curS3Object = s3Contents[i];
      const curObjFilePath = curS3Object['key'];

      // Check to see if the current item we're on is a directory.
      if (curS3Object['size'] === 0) {
        curExhibitIndex++;
        exhibitList[curExhibitIndex] = {};
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
};

// Fetches the JSON file specified by the provided filePath from S3 and adds
// its contents to the ith object in exhibitList.
const addInfo = (filePath, exhibitList, i) => {
  return new Promise((resolve, reject) => {
    Storage.get(filePath)
      .then((url) => fetch(url))
      .then((res) => res.json())
      .then((data) => {
        exhibitList[i]['title'] = data['title'];
        exhibitList[i]['author'] = data['author'];
        exhibitList[i]['description'] = data['description'];

        resolve();
      })
      .catch((err) => reject(err));
  });
};

// Fetches the image specified by the provided filePath from S3, generates a
// URL which points to that image, and adds that URL to the ith object in
// exhibitList's list of image URLs.
const addImage = (filePath, exhibitList, i) => {
  return new Promise((resolve, reject) => {
    Storage.get(filePath)
      .then((url) => {
        if (exhibitList[i]['images'] === undefined) {
          exhibitList[i]['images'] = [];
        }

        exhibitList[i]['images'].push(url);
    
        resolve();
      })
      .catch((err) => reject(err));
  });
};

export default function App() {
  const [exhibitList, setExhibitList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Traverse the bucket's entire file system.
    Storage.list('')
      .then((data) => constructExhibitList(data))
      .then((exhibitList) => {
        setExhibitList(exhibitList);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  let cardContent;
  if (isLoading) {
    cardContent = <Card title='Loading' subtitle='Loading' bgColor='gray' />;
  } else {
    cardContent = exhibitList.map((exhibit, index) => {
      return <Card key={ index } title={ exhibit['title'] } subtitle={ exhibit['author'] } bgColor='blue' />;
    });
  }

  return (
    <>
    <StatusBar
      hidden={ false }
      translucent={ true }
      backgroundColor='rgba(0, 0, 0, 0)'
      barStyle='dark-content'
    />
    <SafeAreaView style={ styles.container }>
      <Title text='Exhibits' />
      <ScrollView>
        { cardContent }
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
