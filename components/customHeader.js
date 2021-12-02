import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/logo-transparent.png";

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Grabaciones Mohicano</Text>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 40,
    backgroundColor: "coral",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginLeft: 5,
  },
});
