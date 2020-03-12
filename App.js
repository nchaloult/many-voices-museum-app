import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </>
  );
}
