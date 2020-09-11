import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from "./MCIcon";
import AppText from "./AppText";

export default function CategoryPickerItem({ item, onPress }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Icon
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={80}
          />
        </TouchableOpacity>
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 15,
      alignItems: "center",
      width: "33%",
    },
    label: {
      marginTop: 5,
      fontSize: 15,
      textAlign: "center",
    },
  });