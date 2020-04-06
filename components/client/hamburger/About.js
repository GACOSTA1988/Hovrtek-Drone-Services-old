import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {

  return (
    <View style={styles.aboutWrapper}>
      <Text>ABOUT US PAGE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  aboutWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default About
