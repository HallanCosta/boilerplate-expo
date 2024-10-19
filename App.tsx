import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import StatusBarHeight from '@root/components/atoms/StatusBarHeight';

import { Routes } from '@root/routes';

import { ThemeIdProps, WhiteLabelProvider } from '@root/hook/whiteLabel';

import { THEME_ID } from '@env';

import theme from '@root/styles/themes';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Ubuntu_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const whiteLabel = {
    'theme1': theme.theme1,
    'theme2': theme.theme2,
  };

  const themeId = THEME_ID as ThemeIdProps;
  
  return (
    <StatusBarHeight>
      <NavigationContainer>
        <WhiteLabelProvider theme={whiteLabel[themeId]}>
          <StatusBar style="light" translucent />
          <Routes />
        </WhiteLabelProvider>
      </NavigationContainer>
    </StatusBarHeight>
  );
}