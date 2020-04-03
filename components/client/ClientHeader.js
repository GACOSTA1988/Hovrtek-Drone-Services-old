import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const ClientHeader = () => {

  return (
    <View>
    <Ionicons style={styles.formLogo}
      name="ios-menu"
      size={32}
      color="darkgray" />
  <Text>
      Hellllllo!
  </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default ClientHeader
