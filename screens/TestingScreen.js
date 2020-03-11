import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TestingScreen() {
  return (
    <View style={ styles.container }>
      <Text>Testing screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
