import React, { useLayoutEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';

import Critique from '../components/Critique';

export default function DetailsScreen(props) {
  useLayoutEffect(() => {
      props.navigation.setOptions({
          headerRight: () => (
              <Button onPress={() => alert('yeet')} title='Info' />
          ),
      });
  }, [props.navigation]);

  return (
    <View style={ styles.container }>
      <Image
        source={{ uri: props.route.params.bgImgURI }}
        style={ styles.img }
      />
        <ScrollView>
          <Critique
            title='Critique One'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1', '#tag2'] }
          />
          <Critique
            title='Critique Two'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
          />
          <Critique
            title='Critique Three'
            subtitle='name - occupation'
            duration='1:10'
            tags={ [] }
          />
          <Critique
            title='Critique Four'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
          />
          <Critique
            title='Critique Five'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
          />
          <Critique
            title='Critique Six'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1', '#tag2', '#tag3'] }
          />
          <Critique
            title='Critique Seven'
            subtitle='name - occupation'
            duration='1:10'
            tags={ [] }
          />
          <Critique
            title='Critique Eight'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
          />
        </ScrollView>
        <View style={ styles.dummyPaddingBottom }></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  dummyPaddingBottom: {
    paddingTop: 108,
  },
  img: {
    width: '100%',
    height: 300,
  },
});
