import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'


export default function LoginScreen() {
  return (
    <Screen>
      <Image 
      style={styles.logo}
      source={require("../assets/logo192.png")}/>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo:{
    width:80,
    height:80,
    alignSelf:'center',
    marginTop:50,
    marginBottom: 20,
  }
})
