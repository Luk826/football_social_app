import React from "react";
import { Text, View, StyleSheet, Touchable } from "react-native";

const FollowedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FollowedScreen</Text>
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

export default FollowedScreen;
