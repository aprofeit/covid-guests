import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeButton({ navigation, navigateTo, title, iconName }) {
  const icon = <Icon name={iconName} style={styles.icon} />

  return (
    <Button
      onPress={
        () => {
          navigation.navigate(navigateTo);
        }
      }
      title={title}
      icon={icon}
      type="clear"
      containerStyle={styles.homeButton}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    fontSize: 20,
    color: 'rgb(32, 137, 220)',
  },

  homeButton: {
    marginTop: 20,
    width: '100%',
  },
});
