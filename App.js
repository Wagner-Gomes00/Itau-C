import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0066cc" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
