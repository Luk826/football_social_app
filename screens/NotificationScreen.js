import React from "react";
import { Text, View, StyleSheet, Touchable } from "react-native";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
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

export default NotificationScreen;
