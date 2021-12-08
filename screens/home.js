import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomHeader from "../components/customHeader";
import CustomButton from "../components/customButton";
import CustomTextBox from "../components/customTextBox";
import CustomFooter from "../components/customFooter";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ContactForm");
  };
  const [show, setShow] = useState(true);
  const showMode = (currentMode) => {
    console.log(currentMode);
    setShow(currentMode);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.content}>
        <CustomButton
          titleText="Quienes somos?"
          submitHandler={() => {
            if (show == true) {
              showMode(false);
            } else {
              showMode(true);
            }
          }}
        />
        {show && <Text style={styles.title}>Agenda Actual</Text>}
        <CustomButton
          titleText="Agendar espacio"
          submitHandler={pressHandler}
        />
        <CustomButton
          titleText="Equipo"
          submitHandler={() => {
            if (show == true) {
              showMode(false);
            } else {
              showMode(true);
            }
          }}
        />
        {show && <Text style={styles.title}>Agenda Actual</Text>}
        <CustomButton
          titleText="Contacto"
          submitHandler={() => {
            if (show == true) {
              showMode(false);
            } else {
              showMode(true);
            }
          }}
        />
        {show && <Text style={styles.title}>Agenda Actual</Text>}
        {/* <Text style={styles.title}>Agenda Actual</Text> */}
        <CustomTextBox heit={200} />
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
