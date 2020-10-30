import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import kiddy from "./assets/kiddy.jpg";
import icon2 from "./assets/icon2.png";
import profile from "./assets/profile.png";

export default function Register2() {
  return (
    <View style={styles.container}>
      <View style={styles.navcontainer}>
        <Image source={icon2} style={styles.icon} />
        <Text style={styles.nav}>Register</Text>
      </View>
      <View style={styles.profilecontainer}>
        <ImageBackground source={profile} style={styles.Image}>
          <Text style={styles.edit}>ADD PROFILE PHOTO</Text>
        </ImageBackground>
      </View>
      {/* <View style={styles.profilecontainer}>
        <Image source={profile} style={styles.Image} />
        <Text style={styles.edit}>ADD PROFILE PHOTO</Text>
      </View> */}

      <View style={styles.formcontainer}>
        <View style={styles.inputContainer1}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Gideon A. Osekre"
          />
        </View>

        <View style={styles.inputContainer1}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input3}
            placeholderTextColor="#aaaaaa"
            placeholder="ablorhgideon@gmail.con"
          />
        </View>
        <View style={styles.inputContainer1}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input4}
            placeholderTextColor="#aaaaaa"
            placeholder="+233 (0) 247 764 481"
          />
        </View>

        <View style={styles.inputContainer1}>
          <Text style={styles.label}>Role</Text>
          <TextInput
            style={styles.input2}
            placeholderTextColor="#aaaaaa"
            placeholder="Deverloper/Designer"
          />
        </View>
        <View style={styles.inputContainer1}>
          <Text style={styles.label}>Twitter</Text>
          <TextInput
            style={styles.input5}
            placeholderTextColor="#aaaaaa"
            placeholder="@GideonAblorh"
          />
        </View>

        <View style={styles.inputContainer1}>
          <Text style={styles.label}>LinkedIn</Text>
          <TextInput
            style={styles.input2}
            placeholderTextColor="#aaaaaa"
            placeholder="@gideon-osekre"
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.btnContainer1}>
          <Text style={styles.btntext1}> REGISTER </Text>
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
  icon: {
    height: 15,
    width: 40,
    marginVertical: 25,
    marginHorizontal: 12,
  },
  navcontainer: {
    flexDirection: "row",
    backgroundColor: "#238017",
    height: 60,
    marginTop: 23,
  },
  nav: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 17,
    marginHorizontal: 70,
  },
  edit: {
    textAlign: "center",
    color: "#238017",
    width: 150,
    marginLeft:-45,
    marginVertical: 60,
    fontWeight: "bold",
  },
  profilecontainer:{
    backgroundColor:"#eef3f3",
    height:180,
    flexDirection:"column"
  },
  Image: {
    height: 50,
    width: 50,
    marginHorizontal: 150,
    marginVertical: 40,
  },
  input: {
    marginLeft: 50,
    // borderBottomColor: "#238017",
    // borderBottomWidth: 1,
    textAlign: "right",
    fontSize: 18,
    width: 200,
  },
  input2: {
    marginLeft: 130,
    // borderBottomColor: "#238017",
    // borderBottomWidth: 1,
    textAlign: "right",
    fontSize: 18,
  },
  input3: {
    marginLeft: 79,
    // borderBottomColor: "#238017",
    // borderBottomWidth: 1,
    textAlign: "right",
    fontSize: 18,
    width: 200,
  },
  input4: {
    marginLeft: 10,
    // borderBottomColor: "#238017",
    // borderBottomWidth: 1,
    textAlign: "right",
    fontSize: 18,
    width: 200,
  },
  input5: {
    marginLeft: 69,
    // borderBottomColor: "#238017",
    // borderBottomWidth: 1,
    textAlign: "right",
    fontSize: 18,
    width: 200,
  },
  btnContainer1: {
    backgroundColor: "#238017",
    justifyContent: "center",
    height: 50,
    width: 300,
    alignItems: "center",
    borderRadius: 3,
    marginTop: 0,
    marginHorizontal: 30,
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
    marginVertical: 10,
    borderBottomColor: "#238017",
    borderBottomWidth: 1,
    width: 330,
    marginHorizontal: 10,
  },
  formcontainer: {
    marginVertical: 10,
    marginBottom: 40,
  },
  // inputContainer2: {
  //   flexDirection: "row",
  //   borderBottomColor: "#238017",
  //   borderBottomWidth: 2,
  //   width: 330,
  //   marginHorizontal: 10,
  // },
  // touchContainer: {
  //   flexDirection: "row",
  //   marginHorizontal: 10,
  // },
  btntext: {
    borderBottomColor: "#238017",
    borderBottomWidth: 2,
  },
});
