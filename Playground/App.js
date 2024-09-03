import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log('*click!*')
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello World!
      </Text>
      {/*<Image source={require('./assets/icon.png')}/>*/}
      <Image
          source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}}
      />
      <Text>
        Have a nice day!
      </Text>
      <StatusBar style="auto" />
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
