import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

import AppNavigator from './components/AppNavigator';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={{ flex: 1 }}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="light-content" />

          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <AppNavigator />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Layout>
    </ApplicationProvider>
  )
};
