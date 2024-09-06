//rsf -->
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import * as url from "url";

export default function Welcome(props) {

    return (
        <>
        <ImageBackground
            style={styles.background}
            // source={require('../assets/coffee.png')}
            source={url('https://legacy.reactjs.org/logo-og.png')}
            resizeMode="cover"
        >
            <Text style={styles.text}>Miłego dnia i smacznej kawusi</Text>
        </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        justifyContent: "center",  // Centruje elementy pionowo
        alignItems: "center",  // Centruje elementy poziomo
    },
    text: {
        color: "brown",
        fontSize: 20,
    }
});
