import React, { useState } from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'


export default function LoginScreen() {
  const [email, setEmail]= useState();
  const [password, setPassword]= useState();

  return (
    <Screen style={styles.container}>
      <Image 
      style={styles.logo}
      source={require("../assets/logo512.png")}/>
      <AppTextInput
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      onChangeText={text => setEmail(text)}
      textContentType="emailAddress"
        icon="email"
        placeholder="Email"
      />
      <AppTextInput
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry
      onChangeText={text => setPassword(text)}
      textContentType="password"
        icon="lock"
        placeholder="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo:{
    width:120,
    height:120,
    alignSelf:'center',
    marginTop:50,
    marginBottom: 20,
  }
})
