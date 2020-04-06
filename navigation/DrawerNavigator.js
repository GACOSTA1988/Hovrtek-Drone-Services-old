import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Unsure if this NavigationContainer is necessary
import { NavigationContainer } from '@react-navigation/native'

import Client from '../components/client/Client.js'
//
import About from '../components/client/hamburger/About.js'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Client" component={Client} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
