import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ExhibitsScreen from '../screens/ExhibitsScreen';
import TestingScreen from '../screens/TestingScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Exhibits'>
        <Stack.Screen name='Exhibits' component={ ExhibitsScreen } options={{ header: () => null }} />
        <Stack.Screen name='Testing' component={ TestingScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
