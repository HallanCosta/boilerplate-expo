import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@root/screens/Home';

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator(); 

  return (
    <Navigator
      screenOptions={{ 
        headerShown: false
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      /> 
    </Navigator>
  );
}