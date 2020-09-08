import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

export default function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="account-heart" color="red" size={40}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="exit-run" size={40}/>
            </View>
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
       
        position: "absolute",
        top: 40,
        left: 30,

    },
    deleteIcon:{
        
        position: "absolute",
        top: 40,
        right: 30,

    },
    
    image:{
        width:"100%",
        height:"100%"
    }
})
