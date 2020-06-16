import React from 'react';
import { Text, View } from 'react-native';

import Home from './components/Home';
import NewGuest from './components/NewGuest';
import AllGuests from './components/AllGuests';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="NewGuest"
          component={NewGuest}
          options={{ title: 'New Guest' }}
        />
        <Stack.Screen
          name="AllGuests"
          component={AllGuests}
          options={{ title: 'All Guests' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
