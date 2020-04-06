import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import About from '../components/hamburger/About.js';
import Support from '../components/hamburger/Support.js';


export default function HamburgerScreen({navigation}) {

  return (
    <View style={styles.container}>

        <View style={styles.hamburgerWrapper}>
          <TouchableOpacity
            style={styles.hamburgerButton}
            onPress={() => navigation.navigate('About', {name: 'About'})}
            >
            <Text style={styles.buttonText}>Pilot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.hamburgerButton}
            onPress={() => navigation.navigate('Support', {name: 'Support'})}
            >
            <Text style={styles.buttonText}>Client</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

hamburgerScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({

  hamburgerWrapper: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',

},
hamburgerButton: {
  height: 40,
  width: 90,
  backgroundColor: 'firebrick',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10
},
buttonText: {
  color: 'white'
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
