import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function Icon({name, size = 40, backgroundColor = "#000",iconColor ="#fff", style}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size /2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            style: style
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} style={style}/>
        </View>
    )
}

const styles = StyleSheet.create({})
