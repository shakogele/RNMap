import React from 'react';
import { Platform, View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import MapScreen from './src/screens/MapScreen/MapScreen';

Navigation.registerComponent(`markersOnMap.WelcomeScreen`, () => WelcomeScreen);
Navigation.registerComponent(`markersOnMap.MapScreen`, () => MapScreen);

export default () => Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "markersOnMap.WelcomeScreen"
          }
        }]
      }
    }
  });

});
