import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar } from 'react-native';
import ClientHeader from './header/ClientHeader'

const Client = () => {

  return (
    <View style={styles.clientWrapper}>
    <StatusBar backgroundColor='blue' barStyle='light-content' />
    <ClientHeader />
      <TouchableOpacity>
          <Text style={styles.clientText}>Client Land</Text>
      </TouchableOpacity>
    </View>
  )
}

  const styles = StyleSheet.create({
    clientWrapper: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    clientText: {
      fontSize: 50,
      color: 'firebrick'
    }
  });

export default Client;
