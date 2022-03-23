import React from 'react';

import { StyleSheet, View,Image} from 'react-native';

const ViewImageScreen = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.orange}/>
            <View style={styles.green}/>
            <Image style={styles.cover} source={require("../../assets/chair.jpg")}/>
        </View>
    );
};

const styles = StyleSheet.create({
   wrapper: {
       flex: 1,
       width:"100%",
       backgroundColor:"black",
       flexDirection:"column"
   },
    cover: {
       height:"70%",
        width:"100%",
        alignSelf:"center",
        marginTop:50
    },
    orange: {
       backgroundColor:"orange",
        width:50,
        height:50,
        right:"-80%",
        top:50
    },
    green: {
        backgroundColor:"green",
        width:50,
        height:50,
        right:"-5%"
    }
})

export default ViewImageScreen;