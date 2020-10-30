import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import mylogo from "./assets/mylogo.png";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={mylogo} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>GIDIWEB CONTACTS</Text>
      </View>

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btn}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{},

  textContainer:{
    marginHorizontal: 50
  },
  text:{
    textAlign:"center",
    fontSize: 40
  },
  btnContainer:{
    marginVertical: 180,
    marginHorizontal: 130,
    textAlign:"center"
  },
  btn:{
    borderBottomColor: "#238017",
    borderBottomWidth: 3,
  },
  image: {
    marginHorizontal: 20,
    marginVertical: 140,
    height: 50,
    width: 300,
  },
});
