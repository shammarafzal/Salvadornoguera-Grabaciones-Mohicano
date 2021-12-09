import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function CustomButton({ titleText, submitHandler }) {
  return (
    <View style={styles.btn}>
      <Button title={titleText} color="black" onPress={() => submitHandler()} />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
    backgroundColor: "silver",
    borderRadius: 10,
    width: 200,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
