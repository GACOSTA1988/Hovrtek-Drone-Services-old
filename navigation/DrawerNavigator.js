import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Unsure if this NavigationContainer is necessary
import { NavigationContainer } from '@react-navigation/native';

import ClientScreen from '../screens/ClientScreen.js';

import About from '../components/client/hamburger/About.js';
import Support from '../components/client/hamburger/Support.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ClientScreen" component={ClientScreen} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
