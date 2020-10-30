import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from "./WelcomeScreen";
import GetStarted from "./GetStarted";
import LoginScreen from "./LoginScreen";
import Register from "./Register";
import Register2 from "./Register2";
import LoginScreen2 from "./LoginScreen2";
import DetailsScreen from "./DetailsScreen";
import DetailsScreen2 from "./DetailsScreen2";
import HomeScreen from "./HomeScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <GetStarted /> */}
      {/* <LoginScreen /> */}
      {/* <Register /> */}
      {/* <Register2 /> */}
      {/* <LoginScreen2 /> */}
      {/* <DetailsScreen /> */}
      {/* <DetailsScreen2 /> */}
      <HomeScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical:40
    // alignItems: "center",
    //  justifyContent: "center",
  },
});
