import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen(props) {
  return (
    <View style={ styles.container }>
      <Text>{ props.route.params.title }</Text>
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
