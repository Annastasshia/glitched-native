import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors';

export default function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image 
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/logo192.png')}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flex: 1

    },
    
    closeIcon:{
        width:50,
        height:50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,

    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,

    },
    
    image:{
        width:"100%",
        height:"100%"
    }
})
