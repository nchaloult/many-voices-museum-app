import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card(props) {
  const colorIndices = props.colors;

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
        <View style={ [styles.labels, styles.row] }>
          <View style={ styles.col }>
            <Text style={ styles.title }>{ props.title }</Text>
            <Text style={ styles.subtitle }>{ props.subtitle }</Text>
          </View>
          <View style={ styles.col }>
            {
              props.tags.map((tag, index) => {
                return (
                  <View key={ index } style={ [styles.tag, { backgroundColor: colors[colorIndices[index]] }] }>
                    <Text style={ styles.tagText }>{ tag }</Text>
                  </View>
                );
              })
            }
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const borderRadius = 18;
const colors = ['#34c759', '#5ac8fa', '#ff3b30', '#ff9500', '#af52de'];

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
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
    justifyContent: 'space-between',
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
  },
  tag: {
    marginLeft: 4,
    marginTop: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 100,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
});
