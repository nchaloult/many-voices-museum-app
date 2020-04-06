import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ExhibitsScreen from '../screens/ExhibitsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import DescriptionScreen from '../screens/DescriptionScreen';

const Stack = createStackNavigator();

export default function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Artwork'>
        <Stack.Screen
          name='Artwork'
          component={ ExhibitsScreen }
          options={{ header: () => null }}
          initialParams={{ exhibitList: props.exhibitList }}
        />
        <Stack.Screen
          name='Details'
          component={ DetailsScreen }
          options={ ({ route }) => ({ title: route.params.title }) }
        />
        <Stack.Screen
          name='Description'
          component={ DescriptionScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
