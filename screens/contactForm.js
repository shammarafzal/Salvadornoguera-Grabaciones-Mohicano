import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Formik } from "formik";

import CustomHeader from "../components/customHeader";
import CustomButton from "../components/customButton";
import CustomTextBox from "../components/customTextBox";
import CustomFooter from "../components/customFooter";
import { TextInput } from "react-native-gesture-handler";

export default function ContactFormScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Agenda actual</Text>
          <CustomTextBox heit={100} />
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              contact: "",
              city: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Name"
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                />
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Email"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Password"
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                />
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Contact"
                  onChangeText={props.handleChange("contact")}
                  value={props.values.contact}
                />
                <TextInput
                  style={styles.inputTxt}
                  placeholder="City"
                  onChangeText={props.handleChange("city")}
                  value={props.values.city}
                />
                <Text style={styles.bottomText}>
                  Lorem Ipsum is simply dummy text of the.
                </Text>
                <Text style={styles.bottomText}>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text style={styles.bottomText}>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <CustomButton
                  style={styles.inputTxt}
                  titleText="Contacto"
                  submitHandler={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.footer}>
          <CustomFooter />
        </View>
      </ScrollView>
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
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    padding: 10,
  },
  inputTxt: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  bottomText: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    padding: 10,
  },
});
