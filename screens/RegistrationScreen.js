import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import Icon from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase";

const RegistrationScreen = ({ navigation }) => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegistration = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registrato con: ",user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            width: "47.5%",
          }}
        >
          <FormInput
            labelValue={first}
            onChangeText={(userFirst) => setFirst(userFirst)}
            placeholderText="Nome"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={{ width: "10%" }} /*Spazio provvisorio da fixare */ />

          <FormInput
            labelValue={last}
            onChangeText={(userLast) => setLast(userLast)}
            placeholderText="Cognome"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Indirizzo Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="eye-off"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText=" Conferma Password"
        iconType="eye-off"
        secureTextEntry={true}
      />

      {/*BUTTON REGISTRAZIONE*/}
      <View style={{ marginTop: 14 }}>
        <FormButton buttonTitle={"Registrati"} onPress={handleRegistration} />
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
});

export default RegistrationScreen;
