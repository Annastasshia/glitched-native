import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'
import AppButton from '../components/AppButton'
import MCIcon from'../components/MCIcon'

export default function MatchesScreen({navigation}) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/anna.jpg')}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Annastasshia</AppText>
                <AppText style={styles.age}>Age: 31</AppText>
                <AppText style={styles.bio}>Eater of sprinkles with chopsticks</AppText>
                <View style={styles.icons}>
                <MCIcon 
                backgroundColor="#45aaf2"
                name="firefox"></MCIcon>
                    <View style={styles.icon} >
                <MCIcon 
                backgroundColor="#26de81"
                name="triforce"></MCIcon>
                </View>
                <MCIcon  
                backgroundColor="#fc5c65"
                name="controller-classic-outline"></MCIcon>
                <View style={styles.icon} >
                <MCIcon 
                backgroundColor="#778ca3"
                name="flask-outline"></MCIcon>
                </View>
                </View>
            </View>
            <AppButton title="Edit" onPress={() => navigation.navigate("Edit")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    age:{
        color: colors.secondary,
        paddingLeft: 10,
        paddingBottom:15,

    },
    bio:{
        paddingLeft: 10,
    },
    icons:{
         
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop:5,
        paddingBottom:5,
    },
    icon:{
        paddingRight: 10,
        paddingLeft: 10,
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
    },
})
