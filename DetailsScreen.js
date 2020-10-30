import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import man from "./assets/man.jpg";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";
import icon2 from "./assets/icon2.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function DetailsScreen() {
  return (
    <View>
      <View style={styles.navcontainer}>
        <Image source={icon2} style={styles.icon} />
        <Text style={styles.nav}>Member Profile</Text>
      </View>
      <View style={styles.profilecontainer}>
        <Image source={man} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>King Jerry</Text>
          <Text style={styles.gen}>Dancehall Musician</Text>
        </View>
      </View>
      <View style={styles.social}>
        <Image source={twitter} style={styles.socialimage} />
        <Image source={insta} style={styles.socialimage} />
      </View>
      <View style={styles.details}>
        <View style={styles.detailsicons}>
          <SimpleLineIcons name="phone" size={15} color="#238017" />
          <Text style={styles.news}>+233 (0) 266 406 166</Text>
        </View>
        <View style={styles.detailsicons}>
          <Feather name="mail" size={15} color="#238017" />
          <Text style={styles.news}>jerry@gidiwebsolutions.com</Text>
        </View>
        <View style={styles.detailsicons}>
          <AntDesign name="enviromento" size={15} color="#238017" />
          <Text style={styles.news}>JamesTown, Accra-Ghana</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  news:{
    marginHorizontal:9,
    marginTop:-2
  },
  detailsicons:{
    flexDirection:"row",
    marginVertical:10
  },
  details: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  icon: {
    height: 15,
    width: 40,
    marginVertical: 50,
    marginHorizontal: 12,
  },
  navcontainer: {
    flexDirection: "row",
    backgroundColor: "#238017",
    height: 90,
    // marginTop: 23,
  },
  nav: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 34,
    marginHorizontal: 70,
  },
  profilecontainer: {
    flexDirection: "row",
  },
  image: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 50,
  },
  info: {
    marginLeft: 2,
    marginVertical: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gen: {
    color: "#a9afaf",
  },
  social: {
    flexDirection: "row",
    marginVertical: -17,
    marginHorizontal: 20,
  },
  socialimage: {
    height: 40,
    width: 40,
  },
});
