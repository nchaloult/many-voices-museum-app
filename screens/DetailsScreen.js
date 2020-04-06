import React, { useLayoutEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';

import Critique from '../components/Critique';

export default function DetailsScreen(props) {
  useLayoutEffect(() => {
      props.navigation.setOptions({
          headerRight: () => (
              <Button
                onPress={ () => props.navigation.navigate('Description', {
                  title: props.route.params.title,
                  content: 'Content for the description screen. This content would ideally come from S3 or something',
                }) }
                title='Info'
              />
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
            colors={ [0,4] }
          />
          <Critique
            title='Critique Two'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
            colors={ [3] }
          />
          <Critique
            title='Critique Three'
            subtitle='name - occupation'
            duration='1:10'
            tags={ [] }
            colors={ [] }
          />
          <Critique
            title='Critique Four'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
            colors={ [2] }
          />
          <Critique
            title='Critique Five'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
            colors={ [1] }
          />
          <Critique
            title='Critique Six'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1', '#tag2', '#tag3'] }
            colors={ [2,4,3] }
          />
          <Critique
            title='Critique Seven'
            subtitle='name - occupation'
            duration='1:10'
            tags={ [] }
            colors={ [] }
          />
          <Critique
            title='Critique Eight'
            subtitle='name - occupation'
            duration='1:10'
            tags={ ['#tag1'] }
            colors={ [1] }
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
