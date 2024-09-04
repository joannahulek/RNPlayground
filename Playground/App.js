import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight, TouchableNativeFeedback, View
} from 'react-native';

export default function App() {
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

    return (
    <SafeAreaView style={styles.container}>
        {touchableComponents()}
        <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
