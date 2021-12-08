import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { Formik } from "formik";

import CustomHeader from "../components/customHeader";
import CustomButton from "../components/customButton";
import CustomTextBox from "../components/customTextBox";
import CustomFooter from "../components/customFooter";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ContactFormScreen() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Agenda actual</Text>
          <CustomTextBox heit={100} />

          <Formik
            initialValues={{
              date: "",
              number: "",
              time: "",
              contact: "",
              city: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props) => (
              <View>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Number"
                  onChangeText={props.handleChange("number")}
                  value={props.values.number}
                  keyboardType="numeric"
                />
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
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
  calender: {
    alignSelf: "center",
    alignContent: "center",
    width: 200,
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
