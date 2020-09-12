import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

function ListUserDeleteAction({onPress}){
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

export default ListUserDeleteAction;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.danger,
        width: 100,
        height:450,
        borderTopRightRadius: 300,
        borderBottomRightRadius: 200,
        borderTopColor: colors.purple,
        borderTopWidth: 10,
        borderBottomColor: colors.purple,
        borderBottomWidth: 10,
        
       justifyContent: "center",
       alignItems: "center",
    }
})
