import React from 'react';
import {Alert, Button} from "react-native";

function ButtonsAndAlerts(props) {
    return (
        <>
            <Button
                color='red'
                title="DO NOT CLICK ME!"
                onPress={() => {
                    Alert.alert("Didn't I?", "??",
                        [
                            {text: "yes", onPress: () => console.log('yes')},
                            {text: "no", onPress: () => console.log("no")}
                        ])
                    alert('I TOLD YOU!!')
                    console.log("BUM!")
                }}/>
            <Button
                title="Send log (on iOS)"
                onPress={() => Alert.prompt('tit', 'mes', text => console.log(text))}
            />
        </>
    );
}

export default ButtonsAndAlerts;