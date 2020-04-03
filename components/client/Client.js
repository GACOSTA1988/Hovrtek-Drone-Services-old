import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import ClientHeader from './header/ClientHeader'

const Client = () => {

  return (
    <View style={styles.clientWrapper}>

    <StatusBar backgroundColor='blue' barStyle='light-content' />
    <ClientHeader />
      <TouchableOpacity>
          <Text style={styles.clientText}>Client Projects List</Text>
      </TouchableOpacity>

    </View>
  )
}

  const styles = StyleSheet.create({
    clientWrapper: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    clientText: {
      fontSize: 30,
      color: 'darkblue'
    }
  });

export default Client;
