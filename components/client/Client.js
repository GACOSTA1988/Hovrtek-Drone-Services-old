import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import ClientHeader from './header/ClientHeader'

const Client = () => {

  return (
    <View style={styles.clientWrapper}>
        <StatusBar backgroundColor='blue' barStyle='light-content' />
        <ClientHeader />

    <View style={styles.projectsNewProjectsWrapper}>
      <TouchableOpacity style={styles.newProjectButton}>
        <Text style={styles.buttonText}>New Project</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.projectsButton}>
        <Text style={styles.buttonText}>Projects</Text>
      </TouchableOpacity>
    </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentClientContainer}>
          <TouchableOpacity>
              <Text style={styles.clientText}>Client Projects List</Text>
          </TouchableOpacity>
        </ScrollView>
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
    },
    contentClientContainer: {
      marginTop: 100,
    },
    newProjectButton: {
      backgroundColor: 'darkgray',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    projectsButton: {
      backgroundColor: 'darkgray',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    projectsNewProjectsWrapper: {
      marginTop: 59,
      flexDirection:'row-reverse',
      height: 40,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold'
    }

  });

export default Client;
