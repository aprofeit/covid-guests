import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import HomeButton from './home/HomeButton';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.homeImage}>
        <Image source={require('../assets/background.jpg')} style={styles.homeImage} />
      </View>
      <View style={styles.buttonList}>
        <HomeButton navigation={navigation} navigateTo="NewGuest" title="New Guest" iconName="user-plus" />
        <HomeButton navigation={navigation} navigateTo="Settings" title="Settings" iconName="lock" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  homeImage: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },

  buttonList: {
    height: 160,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
  },
});
