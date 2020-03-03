import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={ styles.card }>
      <View style={ styles.labels }>
        <Text style={ styles.title }>{ props.title }</Text>
        <Text style={ styles.subtitle }>{ props.subtitle }</Text>
      </View>
    </View>
  );
}

const dimension = 160;

const styles = StyleSheet.create({
  card: {
    width: dimension,
    height: dimension,
    margin: 6,
    borderRadius: 18,

    backgroundColor: '#eee',
  },
  labels: {
    marginTop: 'auto',
    paddingTop: 6,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    fontWeight: '600',
    textTransform: 'uppercase',
  }
});
