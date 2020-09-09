import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

function ListItemDeleteAction({onPress}){
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="heart-broken"
                    size={35}
                    color={colors.white}
                    ></MaterialCommunityIcons>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.danger,
        width: 80,
        height:80,
       justifyContent: "center",
       alignItems: "center",
    }
})
