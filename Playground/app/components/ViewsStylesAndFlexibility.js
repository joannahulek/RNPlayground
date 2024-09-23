import React from 'react';
import {View} from "react-native";

function ViewsStylesAndFlexibility(props) {
    return (
        <>
            <View style={{
                backgroundColor: "white",
                width: "90%",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "baseline",
                flexWrap: "wrap",
            }}>
                <View style={{
                    backgroundColor: "dodgerblue",
                    flexBasis: 100,
                    flexGrow: 0.5,
                    // flexShrink: 1,
                    // width: 100,
                    height: 300,
                }}/>
                <View style={{
                    backgroundColor: "yellow",
                    width: 100,
                    height: 200,
                }}/>
                <View style={{
                    backgroundColor: "tomato",
                    width: 100,
                    height: 100,
                    alignSelf: "flex-start"
                }}/>
                <View style={{
                    backgroundColor: "green",
                    width: 100,
                    height: 100,
                }}/>
            </View>


            <View style={{
                backgroundColor: "dodgerblue",
                width: "90%",
                flex: 0.2,
                flexDirection: "row-reverse"
            }}>
                <View style={{
                    backgroundColor: "pink",
                    width: "90%",
                    flex: 3
                }}/>
                <View style={{
                    backgroundColor: "tomato",
                    width: 100,
                    height: 100
                }}/>
                <View style={styles.yellow_box}/>
            </View>
            <View style={styles.yellow_box}/>
        </>
    );
}

export default ViewsStylesAndFlexibility;