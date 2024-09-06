import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight, TouchableNativeFeedback, View, Button, Alert, Platform, Dimensions, ImageBackground
} from 'react-native';
import Welcome from "./app/components/Welcome";

export default function App() {
    console.log(Dimensions.get('screen'))
  const handlePress = (log: string) => console.log(log)

    function touchableComponents() {
        return <>
            <TouchableWithoutFeedback onPress={
                () => console.log("TouchableWithoutFeedback")
                // handlePress("TouchableWithoutFeedback")
            }>
                <Image
                    source={{
                        width: 200,
                        height: 300,
                        uri: 'https://picsum.photos/200/300'
                    }}
                />
            </TouchableWithoutFeedback>
            <Text onPress={
                () => console.log("Hello World!")
            }>
                Hello World!
            </Text>
            {/*<Image source={require('./assets/icon.png')}/>*/}
            <TouchableNativeFeedback
                onPress={
                    () => console.log("It works only with View component! And it's only an Android Component")
                }
            >
                <View style={{width: 200, height: 300, backgroundColor: "pink"}}>
                    <Image
                        source={{
                            width: 180,
                            height: 280,
                            uri: 'https://picsum.photos/180/280'
                        }}
                    />
                </View>
            </TouchableNativeFeedback>
            <TouchableOpacity onPress={
                () => console.log("TouchableOpacity")
            }>
                <Image
                    source={{
                        width: 200,
                        height: 300,
                        uri: 'https://picsum.photos/201/301'
                    }}
                />
            </TouchableOpacity>
            <Text onPress={
                () => console.log("Have a nice day!")
            }>
                Have a nice day!
            </Text>
            <TouchableHighlight onPress={
                () => console.log("TouchableHighlight")
            }>
                <Image
                    source={{
                        width: 200,
                        height: 300,
                        uri: 'https://picsum.photos/199/299'
                    }}
                />
            </TouchableHighlight>
        </>;
    }

    function buttonsAndAlerts() {
        return <>
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
        </>;
    }

    function viewsStylesAndFlexibility() {
        return <>
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
        </>;
    }

    function objectsPositioning() {
        return <View style={{
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
        </View>;
    }

    return (
    <SafeAreaView
        // style={[styles.container, mainStyle]}
    >
        <StatusBar style="auto"/>
        <Welcome/>


        {/*{objectsPositioning()}*/}
        {/*{viewsStylesAndFlexibility()}*/}
        {/*{touchableComponents()}*/}
        {/*{buttonsAndAlerts()}*/}
    </SafeAreaView>
  );
}

const mainStyle = {backgroundColor:"gold"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
    yellow_box:{
        backgroundColor:"yellow",
        width: "50%",
        height: 100
    }
});
