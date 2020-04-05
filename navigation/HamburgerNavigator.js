import { createStackNavigator } from 'react-navigation-stack';
import HamburgerScreen from '../screens/HamburgerScreen.js'



const screens = {
  Hamburger: {
    screen: Hamburger,
    navigationOPtions: {
      title: 'Hamburger Time'
    }
  },
}

const HamburgerStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60}
  }
})

export HamburgerStack
