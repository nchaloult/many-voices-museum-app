# Many Voices Museum App

<p align="center">
	<img src="https://github.com/nchaloult/many-voices-museum-app/blob/master/gifs/demo-on-readme.gif?raw=true" width="320">
</p>

This project is a proof-of-concept for a platform that a team and I will build for a client during the Fall 2020 school semester. This served as a playground for me to grow familiar with the technologies that my team will be using to build the final version of this platform.

Read more about what the final platform will be, and the motivation behind it, in the "Motivation" section.

## Project Details

This cross-platform mobile application is built with React Native and Expo, along with other helpful libraries like Redux. On initial startup, it reaches out to an AWS S3 bucket to fetch content to display. This means that the content that this app showcases may be updated with little friction.

The S3 bucket's file system is expected to adhere to a particular structure or schema (calling a file system's organization a schema is a bit silly, though 🙂):

* A folder/directory at the root of the S3 bucket exists for each artwork on the app
	* i.e., the root dir of the S3 bucket might have the following folders:
		* `scream/`
		* `mona-lisa/`
		* `starry-night/`
		* `weeping-woman/`
	* Each folder's name is ignored by the application; the app just treats each folder as an artwork
		* This is by design so that people who manage the content on this platform may name their folders however they like
* Inside each folder, two files are expected to be present:
	* A `.json` file
		* Contains three keys:
			* `title`: the title of the artwork as a string
			* `author`: the creator of the artwork as a string
			* `description`: a short bio about the artwork as a string
		* The file name isn't important, just like the artwork's folder name
	* An image file
		* The image type/file extension isn't important
		* The dimensions of the image aren't important

## Todo List / Future Work

### Technical Things

* Migrate over to TypeScript
	* The final version of this platform will be built by a team of six
	* Statically-typed languages are easier to collaborate in, and yield a better developer experience
		* Robust type checkers and compilers catch entire classes of bugs and issues as they are introduced
		* Types make code more readable for everyone involved with a project
* Write a suite of tests
	* Setting up a watered-down continuous integration pipeline is easy these days with services like [TravisCI](https://travis-ci.com) and [CircleCI](https://circleci.com)
	* Running tests against the work done in new commits and PRs helps reassure everyone involved that the new work is robust and compatible with the rest of the project
	* Test-driven development can help developers get in the mindset of a user, and think about what the product should do before they focus on implementing functionality that *they think* the product should do
* Learn about best practices
	* This is my first React Native application that I've ever worked on. I'm sure that this project does not follow patterns and conventions that it ought to be following
	* I'm eager and excited to learn about better ways to organize things and do stuff with React Native in the future

### Features

* Display multiple pictures of one piece of artwork
	* The picture displayed on the "Info" screen for each artwork will be a slideshow of photos
	* In the S3 bucket, any number of images will be able to live inside of the folder for each artwork instead of just one
* *Actually* implement showcased functionality lol
	* Right now, lots of the functionality showcased in this app is "stubbed"
		* Artwork tags and critique tags are not anywhere in the data model, yet
		* Critiques aren't in the data model yet
		* Audio playback and scrubbing functionaity is not implemented yet
	* This is to be expected from a project which is essentially just a demo right now
* Better error handling
	* Since this project served as a playground, I often only wrote logic for the "happy path" in many places
		* The logic which traverses the S3 bucket for content needs the most attention; all of the content that is expected to be present is assumed to be present
	* Better error handling involves failing fast and failing gracefully in an application like this
		* This involves displaying a friendly and concise error message when something goes wrong, and attempting to recover from the issue in the meantime
		* Since the app is pulling content down from the Internet on startup, if this fetch operation fails mid-way through, perhaps we can still display the content that we were able to successfully fetch

## Motivation

Museums and art galleries are effective and interesting outlets to expose differing populations and cultures to new and unfamiliar perspectives. However, if visitors do not arrive with an educational background in art or previous experience with the topics of the pieces, it can be difficult to personally grasp the artworks on display. Tours have been developed in almost all modern museums to offer guidance on this problem throughout the museum, but these tours are generalized and time limited in order to handle large amounts of visitors each day. Because you’re only hearing from one source, it’s easy to let your own opinions about how a piece affects you are significantly swayed by that source. If a particular piece affects you deeply, and you’d like to soak it in for even just a bit longer, the audio tour doesn’t stop for you. If you choose not to stay in sync with the tour, you risk missing out on hearing about later pieces that may move you even more. In short, the audio tour is a great idea, but needs to be more flexible. It should let museum visitors experience the artworks on display however they please.

The Many Voices application addresses these concerns by providing users both a diverse body of art critiques to listen to and also the opportunity to add their own critiques as well. Through the application, users search a museum’s art pieces to select specific pieces and view general information as well as a selection of audio critiques on the pieces. The audio critiques are sorted by tag topics such as the perspective of the critique author and the topic of the piece itself. Users can listen to as many or as few critiques for each piece as they want and then can continue throughout the museum to new pieces at their own pace.

## Notes to Self

Just wanted to jot down some of the steps that I followed that might be important later.

### AWS Amplify Setup Steps

[https://aws-amplify.github.io/docs/js/react](https://aws-amplify.github.io/docs/js/react)

1. Install amplify globally
1. Set up a user that amplify will spin up resources on behalf of with `$ amplify configure`
1. In the root directory of your existing React Native project, run `$ amplify init`
	* [https://youtu.be/SnqABG8e9Zk?t=333](https://youtu.be/SnqABG8e9Zk?t=333)
1. Install client-side packages for use within React Native by running `$ npm i aws-amplify aws-amplify-react-native`
	* Might also have to run `$ npm i @react-native-community/netinfo` depending on if you get "missing dependency" issues or not
1. Run `amplify add storage`
	* This makes you set up authorization
	* Auth resource name: `jdplaygroundauthresource`
	* S3 bucket name: `jd-playground-unique-bucket-identifier`
	* Who has access to your bucket?: auth and guest users
		* I'm thinking that all mobile app users can be a guest
	* Authenticated users have all CRUD permissions
	* Guest users only have read access
	* Lambda trigger for your S3 bucket?: No

### Navigation Setup Steps

[https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

1. Install react-navigation with `$ npm i @react-navigation/native`
1. Install additional dependencies managed by Expo with `$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
1. Install the stack navigator library with `$ npm i @react-navigation/stack`
