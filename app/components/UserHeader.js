import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from '../components/AppText';
import colors from '../config/colors'

export default function UserHeader({ image, title, subTitle }) {
  return (
    <View>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: colors.white,
        alignItems: "center",
      },
      detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
      },
      image: {
        width: 70,
        height: 70,
        borderRadius: 35,
      },
      subTitle: {
        color: colors.medium,
      },
      title: {
        fontWeight: "500",
      },
});
