import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";


import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo512.png")} />
      <AppText style={styles.text}>Welcome Back Player!</AppText>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
              icon="email"
              placeholder="Email"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={handleChange("password")}
              textContentType="password"
              icon="lock"
              placeholder="password"
            />
            <AppButton
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    alignSelf: "center",
    marginBottom: 20,
  },
});
