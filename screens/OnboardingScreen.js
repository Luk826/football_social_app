import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Onboarding from "../components/Onboarding";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Onboarding />
      <View style={{ marginBottom: -10 }} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={[styles.btn]}
        >
          <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
            Accedi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegistrationScreen")}
          style={[styles.btn2]}
        >
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
            Registrati
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    height: 50,
    width: "42%",
    borderRadius: 12,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginRight: 20,
  },
  btn2: {
    flexDirection: "row",
    height: 50,
    width: "42%",
    borderRadius: 12,
    backgroundColor: "#36d671",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
