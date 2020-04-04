import React from 'react';
import {  Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const NewProject = () => {

  return (
    <View style={styles.newProjectWrapper}>
      <TouchableOpacity>
      <Text> NEW PROJECT</Text>
            <Text> This is a big ass form </Text>
              <Text> This is a big ass form </Text>
                <Text> This is a big ass form </Text>
                  <Text> This is a big ass form </Text>

        </TouchableOpacity>
      </View>


  )
}

const styles = StyleSheet.create({
  newProjectWrapper: {
    backgroundColor: 'darkgray',
    width: 380,
    borderWidth: 1,
    padding: 6
  },
});

export default NewProject
