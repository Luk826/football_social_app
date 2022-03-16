import React from "react";
import { Text, View, StyleSheet, Touchable } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
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
});

export default SettingsScreen;
