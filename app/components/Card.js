import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "../components/MCIcon";

export default function Card({
  title,
  subTitle,
  bio,
  image,
  icon,
  icon2,
  onPress,
  renderRightActions,
  renderLeftActions,
  backgroundColor1,
  backgroundColor2
}) {
  return (
    <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>Age: {subTitle}</AppText>
  <AppText style={styles.bio}>{bio}</AppText>
        <View style={styles.icons}>
        <Icon name={icon} size={40} backgroundColor={backgroundColor1}></Icon>
        <View style={styles.iconic} >
        <Icon name={icon2} size={40} backgroundColor={backgroundColor2}></Icon>
        </View>
        </View>
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  icons:{
    flexDirection: 'row',
    // paddingLeft: 10,
    paddingTop:5,
    
    paddingBottom:5,
  },
  iconic:{
    marginRight: 10,
    marginLeft: 10,
    
},
  image: {
    width: "100%",
    height: 350,
    overflow: "hidden",
  },
  subTitle: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  title: {
    marginBottom: 7,
  },
  icon: {
    marginTop: 8,
  },
});
