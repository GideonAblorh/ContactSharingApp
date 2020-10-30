import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import doo from "./assets/doo.jpg";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={doo} style={styles.backgroundImage} />
      </View>
      <View style={styles.info}>
        <Text style={styles.caption}>
          KEEP IN TOUCH WITH THE PEOPLE OF GIDIWEB SOLUTIONS
        </Text>
        <Text style={styles.lit}>
          Sign in or register with your Gidiweb email
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnContainer1}>
          <Text style={styles.btn1}>REGISTER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer2}>
          <Text style={styles.btn2}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 2,
    // marginHorizontal: 1,
    backgroundColor: "#F5FCFF",
  },
  backgroundImage: {
    height: 400,
    width: 370,
  },
  caption:{
    marginVertical: 10,
    marginHorizontal:15,
  },
  lit:{
    color:"#aeb3ae",
    marginHorizontal:15,
  },
  btnContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 120,
  },
  btnContainer1: {
    marginHorizontal: 20,
  },
  btnContainer2: {
    marginHorizontal: 120,
  },
  btn1: {
    borderBottomColor: "#238017",
    borderBottomWidth: 3,
  },
  btn2: {
    borderBottomColor: "#238017",
    borderBottomWidth: 3,
  },
});
