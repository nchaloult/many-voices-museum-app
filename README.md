# Many Voices Playground

Just playing with React Native and AWS Amplify to learn how to build features in our app that we want, and how to hook everything up to the cloud.

## AWS Amplify Setup Steps

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

## Navigation Setup Steps

[https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

1. Install react-navigation with `$ npm i @react-navigation/native`
1. Install additional dependencies managed by Expo with `$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
