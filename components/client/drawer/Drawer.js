import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from './About';
import Client from '../Client.js'

const RootDrawerNavigator = createDrawerNavigator({
  Client: {
    screen: Client
  },
  About: {
    screen: About,
  }
})

export default createAppContainer(RootDrawerNavigator)
