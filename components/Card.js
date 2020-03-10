import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={ [styles.card, {backgroundColor: props.bgColor}] }>
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
    width: 320,
    height: 270,
    margin: 6,
    borderRadius: 18,
  },
  labels: {
    marginTop: 'auto',
    paddingTop: 12,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
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
