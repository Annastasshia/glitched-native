import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors';
import Icon from "../components/MCIcon";

export default function Card({title, subTitle, image, icon, name}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>Age: {subTitle}</AppText>
                {icon && <Icon 
            name={icon}
            size={40}></Icon>}
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom:20,
        overflow: 'hidden'
    },
    detailsContainer:{
        padding: 20,
    },
    image:{
        width: "100%",
        height: 350,
        overflow: "hidden"
    },
    subTitle:{
        fontWeight:"bold",
        marginBottom:7,
    },
    title:{
        marginBottom:7,
    },
    icon:{
        marginTop: 8,
    }
})