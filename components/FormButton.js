import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    //height: windowHeight / 18,
    height: 50,
    backgroundColor: "#36d671",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FormButton;
