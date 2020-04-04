import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import ClientHeader from './header/ClientHeader';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProjectNewProjectHeader from './header/ProjectsNewProjectHeader.js';
import ProjectList from './projectlist/ProjectList.js';
import NewProject from './newproject/NewProject.js'
const Drawer = createDrawerNavigator();


const Client = () => {

// Conditional Rendering state for ProjectList / New Project Tab
  const [newProjectActive, setNewProjectAcitve ] = useState(false);
  console.log(newProjectActive);

const handleNewProjectView = () => {
  if (newProjectActive) {
    return <NewProject/>
  } else {
    return <ProjectList/>
  }
};

  return (
    <View style={styles.clientWrapper}>

      <StatusBar backgroundColor='blue' barStyle='light-content' />
      <ClientHeader handleNewProjectView={()=> handleNewProjectView()}/>
      <ProjectNewProjectHeader />

        <ScrollView style={styles.ClientListcontainer} contentContainerStyle={styles.contentClientContainer}>
          <TouchableOpacity style={styles.ClientProjectListTextWrapper}>
              <Text style={styles.clientText}>Client Projects List</Text>
          </TouchableOpacity>
          {handleNewProjectView()}
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
      marginTop: 20,
      alignItems: 'center',
    },
    ClientProjectListTextWrapper: {
      marginBottom: 20,
    }
  });


export default Client;
