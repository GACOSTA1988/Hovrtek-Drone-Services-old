import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Client from '../components/client/Client.js'
//
import About from '../components/client/hamburger/About.js'





const DrawerNavigator = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Client" component={Client} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
