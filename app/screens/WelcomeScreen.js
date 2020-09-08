import React from 'react';
import { ImageBackground, StyleSheet, View, Image} from "react-native";

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.png")}imageStyle={{resizeMode: "cover"}}>
            <Image style={styles.logo} source={require("../assets/logo512.png")}></Image>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems: "center"
    },

    logo:{
        width:250,
        height: 250,
        position: "absolute",
        top: 70,
        
    },
    logoContainer: {

    },
    
    loginButton: {
        width: "80%",
        height: 70,
        backgroundColor: "#52BE80",
        borderRadius: 50,
        margin: 20
    },

    registerButton: {
        width: "80%",
        height: 70,
        backgroundColor: "#4ecdc4",
        borderRadius: 50,
        
        marginBottom: 175
    }
})

export default WelcomeScreen;
