import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password")
});


export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo512.png")} />
      <AppText style={styles.text}>Welcome Back Player!</AppText>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              textContentType="emailAddress"
              icon="email"
              placeholder="Email"
            />
            
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              name="password"
              textContentType="password"
              icon="lock"
              placeholder="password"
            />
    
            <SubmitButton title="Login" />
         
          </AppForm>
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  error:{
    color: colors.danger
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
