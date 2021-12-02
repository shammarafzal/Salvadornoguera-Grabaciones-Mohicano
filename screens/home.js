import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomHeader from "../components/customHeader";
import CustomButton from "../components/customButton";
import CustomTextBox from "../components/customTextBox";
import CustomFooter from "../components/customFooter";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ContactForm");
  };
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.content}>
        <CustomButton
          titleText="Quienes somos?"
          submitHandler={() => {
            console.log("dis");
          }}
        />
        <CustomButton
          titleText="Agendar espacio"
          submitHandler={pressHandler}
        />
        <CustomButton titleText="Equipo" submitHandler={pressHandler} />
        <CustomButton titleText="Contacto" submitHandler={pressHandler} />
        <Text style={styles.title}>Agenda Actual</Text>
        <CustomTextBox />
      </View>
      <View style={styles.footer}>
        <CustomFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: 10,
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  footer: {
    padding: 40,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
