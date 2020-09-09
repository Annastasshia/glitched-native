import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'

export default function MatchesScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/anna.jpg')}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Annastasshia</AppText>
                <AppText style={styles.age}>Age: 31</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    age:{
        color: colors.secondary,
        padding: 10,

    },
    image: {
        width:"100%",
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        paddingLeft: 10,
        paddingTop: 5,
    }
})
