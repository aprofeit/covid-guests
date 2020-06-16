import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.homeImage}>
        <Image source={require('../assets/background.jpg')} style={styles.homeImage} />
      </View>
      <View style={styles.buttonList}>
        <Button
          onPress={
            () => {
              navigation.navigate('NewGuest')
            }
          }
          title="New Guest"
          icon={
            <Icon name="user-plus" style={styles.icon} />
          }
          type="clear"
          style={styles.homeButton}
        />
        <Button
          onPress={
            () => {
              navigation.navigate('AllGuests')
            }
          }
          title="All Guests"
          icon={
            <Icon name="lock" style={styles.icon} />
          }
          type="clear"
          style={styles.homeButton}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icon: {
    width: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: 'rgb(32, 137, 220)',
  },

  homeButton: {
    marginTop: 20,
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
    alignItems: 'flex-start',
  },
});
