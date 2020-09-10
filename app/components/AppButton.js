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
        borderColor: colors.medium,
        borderWidth: 3,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center',
        padding: 15,
        width:'100%',
        marginVertical: 10,
    },
    text:{
        color: colors.black,
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 2.5
    }
})
