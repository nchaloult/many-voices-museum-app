import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

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
        <View style={ styles.rowContainer }>
          <Card title='One' subtitle='Exquisite' bgColor='blue' />
          <Card title='Two' subtitle='Ah yes' bgColor='red' />
        </View>
        <View style={ styles.rowContainer }>
          <Card title='Three' subtitle='So sublime' bgColor='orange' />
          <Card title='Four' subtitle='Beautiful' bgColor='green' />
        </View>
        <View style={ styles.rowContainer }>
          <Card title='Five' subtitle='Dear lord' bgColor='yellow' />
        </View>
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
  rowContainer: {
    flexDirection: 'row',
  }
});
