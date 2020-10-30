import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import anda from "./assets/anda.jpg";
import icon2 from "./assets/icon2.png";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.navcontainer}>
        <Image source={icon2} style={styles.icon} />
        <Text style={styles.nav}>Sign In</Text>
      </View>

      <View>
        <Image source={anda} style={styles.andaimage} />
      </View>
      <View>
        <Text style={styles.check}>Email or Password is incorrect, check and try again</Text>
      </View>

      <View style={styles.inputContainer1}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="joan.shay@sparrow.com"
        />
      </View>

      <View style={styles.inputContainer2}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input2}
          placeholderTextColor="#aaaaaa"
          placeholder="********"
        />
      </View>

      <View>
        <TouchableOpacity style={styles.btnContainer1}>
          <Text style={styles.btntext1}> Sign In </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.touchContainer}>
        <Text style={styles.forgot}>Forgot?</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btntext}> Resert Password </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }),
  icon:{
    height:15,
    width:40,
    marginVertical:27,
    marginHorizontal:12

  },
  navcontainer: {
    flexDirection:"row",
    backgroundColor: "#238017",
    height: 70,
    marginTop: 23,
  },
  nav: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    marginVertical:17,
    marginHorizontal:70
  },
  check:{
    color:"red",
    marginHorizontal:10,
    marginVertical:20
  },
  andaimage: {
    height: 200,
    width: 360,
  },
  input: {
    marginLeft: 80,
    // borderBottomColor: "#238017",
    // borderBottomWidth: 1,
    textAlign: "right",
    fontSize: 18,
    width: 200,
  },
  input2: {
    marginLeft: 170,
    // borderBottomColor: "#238017",
    // borderBottomWidth: 1,
    textAlign: "right",
    fontSize: 18,
  },
  btnContainer1: {
    backgroundColor: "#238017",
    justifyContent: "center",
    height: 50,
    width: 300,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 40,
    marginHorizontal: 29,
  },
  label: {
    fontSize: 18,
  },
  btntext1: {
    color: "#fff",
    fontSize: 20,
  },
  inputContainer1: {
    flexDirection: "row",
    marginVertical: 30,
    borderBottomColor: "#238017",
    borderBottomWidth: 2,
    width: 330,
    marginHorizontal: 10,
  },
  inputContainer2: {
    flexDirection: "row",
    borderBottomColor: "#238017",
    borderBottomWidth: 2,
    width: 330,
    marginHorizontal: 10,
  },
  touchContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  btntext: {
    borderBottomColor: "#238017",
    borderBottomWidth: 2,
  },
});
