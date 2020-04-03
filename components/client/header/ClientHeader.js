import React from 'react';
import { Text, View, StyleSheet, Header, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { hovrtekLogo } from './hovrtek_logo.png'

const ClientHeader = () => {

  return (

<View style={styles.clientHeaderWrapper}>
  <View style={styles.headerText}></View>
  <Image
  source={hovrtekLogo}
  style={styles.hovrtekLogo}
  />
    <Ionicons style={styles.hamburger}
      name="ios-menu"
      size={45}
      color="white"
      resizeMode="contain"
      />
</View>

  )
}

const styles = StyleSheet.create({
  clientHeaderWrapper: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  backgroundColor: 'darkblue'
  },
  hamburger: {
    alignSelf:'flex-end',
    margin: 5
  },
  hovrtekLogo: {
    alignSelf:'flex-end',
    padding: 5,

  }
});

export default ClientHeader
