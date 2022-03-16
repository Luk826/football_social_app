import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const SocialButton = ({
  buttonTitle,
  btnType,
  backgroundColor,
  color,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: bgColor }]}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          style={styles.icon}
          size={22}
          color={color}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, { color: color }]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 12,
    width: "100%",
    //height: windowHeight / 15,
    height: 50,
    padding: 10,
    flexDirection: "row",
    borderRadius: 12,
    marginBottom: 8,
  },
  iconWrapper: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontWeight: "bold",
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SocialButton;
