import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Title from '../components/Title';

export default function ExhibitsScreen(props) {
  // Get exhibitList prop passed in from a Screen component in AppNavigator.
  const exhibitList = props.route.params.exhibitList;

  return (
    <View style={ styles.container }>
      <ScrollView contentContainerStyle={ styles.scrollView } >
        <View style={ styles.dummyPadding }></View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dummyPadding: {
    paddingTop: 64,
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
  }
});
