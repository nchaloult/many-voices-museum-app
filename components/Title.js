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
    marginTop: 24,
    width: '100%',
    height: 56,
  },
  text: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 34,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: 'bold',
    color: '#353535',
    backgroundColor: 'rgba(0,0,0,0)'
  }
});
