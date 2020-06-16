import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import NewGuest from './components/NewGuest';
import Settings from './components/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='NEW GUEST'/>
    <BottomNavigationTab title='SETTINGS'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='New Guest' component={NewGuest}/>
    <Screen name='Settings' component={Settings}/>
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />

        <AppNavigator />
      </SafeAreaView>
    </ApplicationProvider>
  )
};
