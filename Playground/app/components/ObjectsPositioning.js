import React from 'react';
import {View} from "react-native";

function ObjectsPositioning(props) {
    return (
        <View style={{
        backgroundColor: "white",
        width: "90%",
        flex: 0.95,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // justifyContent: "space-around",

    }}>
        <View style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
        }}/>
        <View style={{
            backgroundColor: "green",
            width: 100,
            height: 100,
            bottom: 20,
            right: 20,
            position: "absolute",
        }}/>
        <View style={{
            backgroundColor: "yellow",
            width: 100,
            height: 100,
            top: 20,
            left: 20,
            position: "relative",
        }}/>
        <View style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
        }}/>
    </View>
    );
}

export default ObjectsPositioning;