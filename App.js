import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import colors from './app/config/colors';
import MatchesScreen from './app/screens/MatchesScreen';
import Screen from './app/components/Screen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';


export default function App() {
  return (
    <Screen>
      <Icon 
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white" 
        />
    </Screen>
  //  <MatchesScreen />
    // <SafeAreaView style={styles.container}>
      // <ViewImageScreen/>
      // <WelcomeScreen/>
      // <MessagesScreen />
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
