import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import PilotHeader from './PilotHeader';
import Footer from '../Footer';
import Jobs from './Jobs';

const Pilot = () => {

  return (
    <View style={styles.pilotWrapper}>
      <Text style={styles.pilotText}>This is the pilot page</Text>
      <PilotHeader />
      <Jobs />
      <Footer />
    </View>
  )
}

  const styles = StyleSheet.create({
    pilotWrapper: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pilotText: {
      fontSize: 30,
      margin: 20
    }
  });

export default Pilot;
