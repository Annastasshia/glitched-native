import React from 'react';
import { ImageBackground, StyleSheet, View, Image} from "react-native";
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
        blurRadius={1} 
        style={styles.background}
        source={require("../assets/background.png")}imageStyle={{resizeMode: "cover"}}>
            <Image style={styles.logo} source={require("../assets/logo512.png")}></Image>
            <View style={styles.buttonsContainer}>
            <AppButton title="Login" onPress={() => navigation.navigate("Login")}/>
            <AppButton title="Register" onPress={() => navigation.navigate("Register")}/>color="secondary" />
            </View>
            
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
    buttonsContainer:{
        padding: 20,
        width: "100%"
    }
})

export default WelcomeScreen;
