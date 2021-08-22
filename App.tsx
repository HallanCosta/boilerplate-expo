import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" translucent />
      <Home />
    </NavigationContainer>
  );
}