import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HamburgerStack from './HamburgerStack'


const RootDrawerNavigator = createDrawerNavigator({

  Home: {
    screen: HomeStack,
  },
  About: {
    screen: HamburgerStack,
  }
})


export default createAppContainer(RootDrawerNavigator)
