import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomTextBox() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>
        Calendario mostrando espacios reservados con codigo de reservacion/ID de
        reservacion
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    width: 330,
    height: 200,
    // marginTop: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    flex: 1,
  },
});
