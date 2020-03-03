import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Card from './components/Card';

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
        <View style={ styles.rowContainer }>
          <Card title='One' subtitle='Exquisite' />
          <Card title='Two' subtitle='Ah yes' />
        </View>
        <View style={ styles.rowContainer }>
          <Card title='Three' subtitle='So sublime' />
          <Card title='Four' subtitle='Beautiful' />
        </View>
        <View style={ styles.rowContainer }>
          <Card title='Five' subtitle='Dear lord' />
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
