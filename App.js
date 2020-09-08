import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    
    // <SafeAreaView style={styles.container}>
      // <ViewImageScreen/>
      <WelcomeScreen/>
      // <View style={{width:"100%"}} />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
