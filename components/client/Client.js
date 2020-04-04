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
  const [newProjectViewActive, setNewProjectViewAcitve ] = useState(false);
  const [projectsViewActive, setProjectsViewActive ] = useState(true);
console.log('new project', newProjectViewActive);
console.log('projects', projectsViewActive);

const toggleProjectListState = () => {
setNewProjectViewAcitve(true)
setProjectsViewActive(false)
}

const toggleNewProjectState = () => {
setNewProjectViewAcitve(true)
setNewProjectViewAcitve(false)
}

const handleNewProjectView = () => {
  if (newProjectViewActive) {
    return <NewProject/>
  } else {
    return <ProjectList/>
  }
};

  return (
    <View style={styles.clientWrapper}>

      <StatusBar backgroundColor='blue' barStyle='light-content' />
      <ClientHeader />
      <ProjectNewProjectHeader
        toggleProjectListState={()=> toggleProjectListState()}
        toggleNewProjectState={()=> toggleNewProjectState()}
        />

        <ScrollView style={styles.ClientListcontainer} contentContainerStyle={styles.contentClientContainer}>

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
    contentClientContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
  });


export default Client;
