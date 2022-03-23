import React from 'react';

import { StyleSheet, View,Text,Image,ImageBackground} from 'react-native';

const WelcomeScreen = () => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground style={styles.cover} source={require("../../assets/background.jpg")}>
                <View style={styles.logoContainer}>
                    <Image  style={styles.logo} source={require("../../assets/logo-red.png")}/>
                    <Text>Sell what you don't need!</Text>
                </View>
                    <View style={styles.signInButton}/>
                    <View style={styles.signUpButton}/>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        width:"100%"
    },
    cover:{
        flexGrow:1,
        paddingTop:100,
        alignItems:"center",
        width:"100%",
        justifyContent:"flex-end"
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    logo: {
        height:100,
        width:100
    },
    signInButton: {
        backgroundColor:"#fc5c65",
        height:50,
        width:"100%",
    },
    signUpButton: {
        backgroundColor:"#4ecdc4",
        height:50,
        width:"100%",
    }
})

export default WelcomeScreen;
