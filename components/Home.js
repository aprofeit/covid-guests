import React from 'react';
import { Button, Text } from 'react-native';

export default function Home({ navigation }) {
  return (
    <>
    <Button
      onPress={
        () => {
          navigation.navigate('NewGuest')
        }
      }
      title="New Guest"
    />
    </>
  )
}
