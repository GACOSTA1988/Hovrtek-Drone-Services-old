import React from 'react';
import { Text, View, StyleSheet, Header, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {

  return (
    <View style={styles.footerWrapper}>
      <Text style={styles.mediaButton}>
      <Icon name="facebook"
        size={20}
        color="white"
        margin={10}>
      </Icon>
      <Icon name="instagram"
        size={20}
        color="white"
        style={styles.mediaButton}>
      </Icon>
      <Icon name="linkedin"
        size={20}
        color="white"
        style={styles.mediaButton}>
      </Icon>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footerWrapper: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'darkblue',
  height: 60
  },
  mediaButton: {
    textAlign: 'center',
    paddingTop: 20
  }

});

export default Footer;
