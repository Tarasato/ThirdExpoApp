import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Hello from './Hello';
import Hi from './Hi';
import PageA from './views/PageA';

export default function App() {
  return (
    //<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <PageA />
        <StatusBar style="auto" />
      </View>
    //</TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({});
