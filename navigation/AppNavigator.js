import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ExhibitsScreen from '../screens/ExhibitsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Exhibits' component={ ExhibitsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
