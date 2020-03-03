import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

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
      <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
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
  },
});
