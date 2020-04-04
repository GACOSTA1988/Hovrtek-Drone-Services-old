import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import ClientHeader from './header/ClientHeader';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProjectNewProjectHeader from './ProjectsNewProjectHeader/ProjectsNewProjectHeader.js'

const Drawer = createDrawerNavigator();

const Client = () => {

  return (
    <View style={styles.clientWrapper}>

      <StatusBar backgroundColor='blue' barStyle='light-content' />
      <ClientHeader />
      <ProjectNewProjectHeader />

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
  });


export default Client;
