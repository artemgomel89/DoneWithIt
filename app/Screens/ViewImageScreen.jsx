import React from 'react';

import { StyleSheet, View,Image} from 'react-native';
import colors from "../colors";

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon}/>
            <Image style={styles.cover} source={require("../assets/chair.jpg")} resizeMode="contain"/>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       width:"100%",
       backgroundColor:colors.black,
       flexDirection:"column",
   },
    cover: {
       height:"100%",
        width:"100%",
        alignSelf:"center",
    },
    closeIcon: {
       backgroundColor:colors.primary,
        width:50,
        height:50,
        position:"absolute",
        top:50,
        left:30,
    },
    deleteIcon: {
        backgroundColor:colors.secondary,
        width:50,
        height:50,
        position:"absolute",
        top:50,
        right:30,


    }
})

export default ViewImageScreen;