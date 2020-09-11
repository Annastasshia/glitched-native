import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import colors from '../config/colors'

export default function Screen({ children, style }) {
    return (
        
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>
            {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view:{
        flex:1,
        backgroundColor: colors.light
    }
})
