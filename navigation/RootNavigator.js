// This component isn't doing anything. It was an attempt to export the navigator into an <AppContain> to App.js in order to separate the Navigator to the another page. Possibly try to do this later to clean up code? Problem: React-Navigation 5 does not use <AppNavigator>
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Client from '../components/client/Client.js';
import Pilot from '../components/pilot/Pilot.js';

import BottomTabNavigator from './BottomTabNavigator.js';


const Stack = createStackNavigator();

const RootNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      />
    <Stack.Screen
      name="Pilot"
      component={Pilot}
      />
    <Stack.Screen
      name="Client"
      component={Client}
      />
  </Stack.Navigator>
}

export default RootNavigator
