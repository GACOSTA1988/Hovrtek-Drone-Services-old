import React from 'react';
import {  Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ProjectList = () => {

  return (
    <View style={styles.projectCard}>
      <TouchableOpacity>
      <Text> This is a Project. </Text>
            <Text> When: April 20th, 2020 </Text>
        <Text> Notes: I want a drone to spy on my neighbor </Text>
        </TouchableOpacity>
      </View>


  )
}

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: 'darkgray',
    width: 380,
    borderWidth: 1,
    padding: 6
  },
});

export default ProjectList
