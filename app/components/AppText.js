import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'


export default function AppText({ children, style }) {
    return (
        <View>
            <Text style={[styles.text, style]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
