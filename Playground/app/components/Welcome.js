//rsf -->
import React from 'react';
import {StyleSheet, Text, View, Image, Button} from "react-native";

let coffeeColor = 'sienna'

export default function Welcome(props) {
    return (
        <>
            <Text style={styles.text}>Miłego dnia i smacznej kawusi!</Text>
            <Image
                style={styles.background}
                source={require('../assets/coffee.png')}
            />
            <View >
                <Button title='Wypij kawę'
                color={coffeeColor}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",  // Centruje elementy pionowo
        alignItems: "center",  // Centruje elementy poziomo
    },
    background: {
        width: "100%",
        height: "80%",
    },
    text: {
        color: coffeeColor,
        backgroundColor: "antiquewhite",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        margin: 20,
    },
});