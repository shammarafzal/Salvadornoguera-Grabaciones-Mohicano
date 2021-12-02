import React from "react";
import { StyleSheet, View, Image } from "react-native";
import logo from "../assets/logo-transparent.png";

export default function CustomFooter() {
  return (
    <View style={styles.footer}>
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 40,
    height: 40,
    margin: 10,
  },
});
