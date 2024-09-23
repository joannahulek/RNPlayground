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
import TouchableComponents from "./app/components/TouchableComponents"
import ButtonsAndAlerts from "./app/components/ButtonsAndAlerts";
import ViewsStylesAndFlexibility from "./app/components/ViewsStylesAndFlexibility";
import ObjectsPositioning from "./app/components/ObjectsPositioning";

export default function App() {
    console.log(Dimensions.get('screen'))
  const handlePress = (log: string) => console.log(log)


    return (
    <SafeAreaView
        style={[styles.container, mainStyle]}
    >
        {/*<StatusBar style="auto"/>*/}
        <Welcome/>

        {/*<ObjectsPositioning/>*/}
        {/*<ViewsStylesAndFlexibility/>*/}
        {/*<TouchableComponents/>*/}
        {/*<ButtonsAndAlerts/>*/}
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
