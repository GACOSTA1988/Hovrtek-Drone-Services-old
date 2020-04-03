import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


const Pilot = () => {

  return (
    <View style={styles.clientWrapper}>


      <TouchableOpacity>
          <Text style={styles.clientText}>Pilot Land</Text>
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

export default Pilot;
