import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
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
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icon: {
    marginRight: 10,
    fontSize: 20,
    color: 'rgb(32, 137, 220)',
  }
});
