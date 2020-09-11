import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'


import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    
    
    return (
        <>
            <AppTextInput
            // autoCapitalize="none"
            // autoCorrect={false}
            // keyboardType="email-address"
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps}
            // textContentType="emailAddress"
            // icon="email"
            // placeholder="Email"
          />
          <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;

const styles = StyleSheet.create({})

            