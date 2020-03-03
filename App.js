import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

import Card from './components/Card';
import Title from './components/Title';

export default function App() {
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
