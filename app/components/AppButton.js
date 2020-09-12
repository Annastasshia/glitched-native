import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors';

export default function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
        
            <Text style={styles.text}>{title}</Text>
     
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
    
        backgroundColor: colors.primary,
        shadowColor: "black",
        shadowOffset: {  width: 5,  height: 5,  },
        shadowOpacity: .5,
        borderRadius: 25,
        justifyContent: 'center',                                
        alignItems:'center',
        alignSelf:"center",
        padding: 10,
        width:'80%',
        marginVertical: 10,
        
    },
    text:{
        color: colors.black,
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 2.5
    }
})
