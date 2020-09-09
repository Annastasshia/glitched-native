import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ListItemDeleteAction(props){
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="heart-broken"
                size={35}
                color={colors.white}
                ></MaterialCommunityIcons>
        </View>
            
        
    )
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.danger,
        width: 70,
       justifyContent: "center",
       alignItems: "center",
    }
})
