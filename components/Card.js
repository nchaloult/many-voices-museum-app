import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <TouchableOpacity
      style={ styles.card }
      activeOpacity={ 0.8 }
      onPress={ () => props.navigation.navigate('Details', {
        title: props.title,
        subtitle: props.subtitle,
        bgImgURI: props.bgImgURI,
      }) }
    >
      <ImageBackground
        source={{ uri: props.bgImgURI }}
        style={ styles.bgImg }
        imageStyle={{ borderRadius: borderRadius }}
      >
        <View style={ styles.labels }>
          <Text style={ styles.title }>{ props.title }</Text>
          <Text style={ styles.subtitle }>{ props.subtitle }</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const borderRadius = 18;

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 270,
    marginBottom: 24,

    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
  },
  subtitle: {
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#aeaeb2',
  }
});
