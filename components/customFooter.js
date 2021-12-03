import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { SocialIcon } from "react-native-elements";

export default function CustomFooter() {
  return (
    <View style={styles.footer}>
      <SocialIcon type="facebook" />
      <SocialIcon type="youtube" />
      <SocialIcon type="instagram" />
      <SocialIcon type="twitter" />
      <SocialIcon type="medium" />
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
