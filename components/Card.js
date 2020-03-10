import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={ styles.card }>
      <ImageBackground
        source={{ uri: props.bgImgURI }}
        style={ styles.bgImg }
        imageStyle={{ borderRadius: 18 }}
      >
        <View style={ styles.labels }>
          <Text style={ styles.title }>{ props.title }</Text>
          <Text style={ styles.subtitle }>{ props.subtitle }</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const dimension = 160;

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 270,
    margin: 6,
  },
  bgImg: {
    width: '100%',
    height: '100%',
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
