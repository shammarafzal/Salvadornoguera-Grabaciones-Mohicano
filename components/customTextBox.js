import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomTextBox({ heit }) {
  return (
    <View style={[styles.box, { height: heit }]}>
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
    marginBottom: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    flex: 1,
  },
});
