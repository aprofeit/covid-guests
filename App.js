import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import AppNavigator from './components/AppNavigator';

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
