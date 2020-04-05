import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ExhibitsScreen from '../screens/ExhibitsScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Exhibits'>
        <Stack.Screen
          name='Exhibits'
          component={ ExhibitsScreen }
          options={{ header: () => null }}
          initialParams={{ exhibitList: props.exhibitList }}
        />
        <Stack.Screen name='Details' component={ DetailsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
