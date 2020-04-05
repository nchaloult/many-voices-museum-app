import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Title from '../components/Title';

export default function ExhibitsScreen(props) {
  // Get exhibitList prop passed in from a Screen component in AppNavigator.
  const exhibitList = props.route.params.exhibitList;

  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView contentContainerStyle={ styles.scrollView } >
        <View style={ styles.dummyPaddingTop }></View>
        <Title text='Exhibits' />
        {
          exhibitList.map((exhibit, index) => {
            return (
              <Card
                key={ index }
                navigation={ props.navigation }
                title={ exhibit.title }
                subtitle={ exhibit.author }
                bgImgURI={ exhibit.images[0] }
              />
            );
          })
        }
      </ScrollView>
      <View style={ styles.dummyPaddingBottom }></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dummyPaddingTop: {
    paddingTop: 24,
  },
  dummyPaddingBottom: {
    paddingTop: 42,
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
  }
});
