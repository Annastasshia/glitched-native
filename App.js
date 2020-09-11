import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import colors from './app/config/colors';
import MatchDetailsScreen from './app/screens/MatchDetailsScreen';
import MatchesScreen from './app/screens/MatchesScreen';
import Screen from './app/components/Screen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/MCIcon';
import ListUser from './app/components/ListUser';
import AccountScreen from './app/screens/AccountScreen';

  // Add the Firebase products that you want to use
import * as firebase from 'firebase';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ProfileEditScreen from './app/screens/ProfileEditScreen';

export default function App() {
 
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDaSVn2BKORUt5j00RDf_xrP0gOB7cY_48",
  //   authDomain: "glitched-6f146.firebaseapp.com",
  //   databaseURL: "https://glitched-6f146.firebaseio.com",
  //   projectId: "glitched-6f146",
  //   storageBucket: "glitched-6f146.appspot.com",
  //   messagingSenderId: "934026479717",
  //   appId: "1:934026479717:web:bf68c1af09a23e6df51e8c",
  //   measurementId: "G-1ECRY6NDPC"
  // };
  

  // firebase.initializeApp(firebaseConfig);
 
  return (
    
    // <AccountScreen/>
  // <MatchesScreen />
  // <Screen>
  //   <AppPicker 
  //     selectedGender={category}
  //     onSelectedGender={item => setCategory(item)}
  //     genders={categories} 
  //     icon="apps" 
  //     placeholder="Category" />
  //   <AppTextInput placeholder="Username" icon="email" />
  //   </Screen>
  < ProfileEditScreen/>
  // <LoginScreen />
      // <ViewImageScreen/>
      // <WelcomeScreen/>
      // <MessagesScreen />
      
   
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
