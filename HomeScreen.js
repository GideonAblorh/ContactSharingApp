import React from "react";
import { StatusBar } from "expo-status-bar";
import man from "./assets/man.jpg";
import QRCode from "./assets/QRCode.png";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txt1}>Exchange Contact Information</Text>
        <Text style={styles.txt2}>Scan this QR below to share your contacts</Text>
      </View>
      <View style={styles.QRContainer}>
        <Image source={QRCode} style={styles.QRCode}/>
      </View>
      <View style={styles.profilecontainer}>
        <Image source={man} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>King Jerry</Text>
          <Text style={styles.gen}>Dancehall Musician</Text>
        </View>
      </View>
      <View style={styles.down}>
        <Text style={styles.want}>Want to add a new connection?</Text>
        <TouchableOpacity style={styles.btnContainer1}>
          <Text style={styles.btntext}>Scan QR </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtcontainer:{
    alignSelf:"center",
    marginVertical:40,
    marginHorizontal:30
  },
  profilecontainer: {
    flexDirection: "row",
    marginHorizontal:30
  },
  info: {
    marginLeft: 2,
    marginVertical: 12,
  },
  down:{
    flexDirection:"row",
    marginVertical:60,
    justifyContent:"center"
  },
  want:{
    marginVertical:3
  },
  btntext: {
    textAlign:"center",
    color: "#238017",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#238017",
    width: 80,
    marginHorizontal:10,
    // marginTop:170,
    // fontWeight:"bold"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gen: {
    color: "#a9afaf",
  },
  txt1:{},
  txt2:{
    color:"grey",
    marginVertical:10
  },
  QRContainer:{
    alignSelf:"center",
    marginVertical:10

},
QRCode:{
    height: 200,
    width:200
},
  image: {
    height: 50,
    width: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 50,
  },
});
