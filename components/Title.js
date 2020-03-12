import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title(props) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{ props.text }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    marginBottom: 8,
    marginLeft: 28,
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  }
});
