import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
export default function Icon({name, size = 40, backgroundColor = "#000",iconColor ="#fff"}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size /2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <FontAwesome5 name={name} color={iconColor} size={size * 0.5}/>
        </View>
    )
}

const styles = StyleSheet.create({})