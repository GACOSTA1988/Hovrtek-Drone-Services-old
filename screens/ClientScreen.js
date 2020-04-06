import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProjectNewProjectHeader from '../components/client/header/ProjectsNewProjectHeader.js';
import ClientHeader from '../components/client/header/ClientHeader';
import ProjectList from '../components/client/projectlist/ProjectList.js';
import NewProject from '../components/client/newproject/NewProject.js'
import Footer from '../components/Footer.js'
const Drawer = createDrawerNavigator();


const ClientScreen = ({navigation}) => {

// Conditional Rendering state for ProjectList / New Project Tab
  const [newProjectViewActive, setNewProjectViewAcitve ] = useState(false);
  const [projectsViewActive, setProjectsViewActive ] = useState(true);


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
        <Footer/>
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


export default ClientScreen;
