import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={"#666"}
        {...rest}
      />
      <View style={styles.iconStyle}>
        <TouchableOpacity>
          {
            <Feather
              name={iconType}
              size={25}
              color="#666" /* {data.secureTextEntry ? 
                    https://github.com/itzpradip/react-navigation-v5-mix/blob/master/screens/SignInScreen.js */
            />
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 12,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  iconStyle: {
    padding: 4,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    marginRight: 5,
  },
});

export default FormInput;
