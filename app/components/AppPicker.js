import React, { useState } from 'react'
import { StyleSheet, FlatList, Button, Text, View, TextInput, TouchableWithoutFeedback, Modal } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import Screen from './Screen'

import PickerGender from './PickerGender';


export default function AppPicker({ icon, placeholder, genders, onSelectedGender, selectedGender}) {
    const [modalVisible,setModalVisible] = useState(false);
    
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons 
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
            />}

        <AppText style={styles.text}>{selectedGender ? selectedGender.label : placeholder}</AppText>
            <MaterialCommunityIcons 
            name="chevron-down"
            size={20}
            color={colors.medium}
            />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
            <Button title="Close" onPress={()=> setModalVisible(false)} />
            <FlatList
            data={genders}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => 
            <PickerGender
            label={item.label}
            onPress={() => {
                setModalVisible(false);
                onSelectedGender(item);
            }}/>}
            />

           
            </Screen>
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
container: {
    backgroundColor:colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: '100%',
    padding: 15,
    marginVertical: 10
},
textInput:{
    color:colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
},
icon: {
    marginRight:10,

},
text:{
    flex: 1,
},

})
