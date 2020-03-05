import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

import Card from './components/Card';
import Title from './components/Title';

import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export default function App() {
  const [imgURL, setImgURL] = useState('https://facebook.github.io/react/logo-og.png');

  useEffect(() => {
    Storage.get('performance11.jpg')
      .then((data) => setImgURL(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
    <StatusBar
      hidden={ false }
      translucent={ true }
      backgroundColor='rgba(0, 0, 0, 0)'
      barStyle='dark-content'
    />
    <SafeAreaView style={ styles.container }>
      <Image
        source={{ uri: imgURL }}
        style={{ width: 100, height: 100 }}
      />
      <Title text='Exhibits' />
      <ScrollView>
        <Card title='One' subtitle='Firstname Lastname' bgColor='blue' />
        <Card title='Two' subtitle='Firstname Lastname' bgColor='red' />
        <Card title='Medium Title' subtitle='Firstname Lastname' bgColor='orange' />
        <Card title='Even Longer Title' subtitle='Firstname Lastname' bgColor='green' />
        <Card title='Super Duper Long Title' subtitle='Firstname Lastname' bgColor='yellow' />
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
