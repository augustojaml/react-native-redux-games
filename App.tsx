import React from 'react';

import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';

import { AppRoutes } from '@routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from '@global/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  SplashScreen.preventAutoHideAsync();

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  );
}
