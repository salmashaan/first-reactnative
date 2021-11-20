import React from "react";
import styles from "../../styles";
import { View, Text, TextInput } from "react-native";
import { Button } from "native-base";
import { useState } from "react";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async () => {
    // console.log(user);
    await authStore.signup(user, navigation);
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Sign up</Text>
      <TextInput
        onChangeText={(username) => setUser({ ...user, username })}
        style={styles.authTextInput}
        placeholder="Username"
      />
      <Text>Email ID</Text>
      <TextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder={"Email"}
      />
      <TextInput
        onChangeText={(password) => setUser({ ...user, password })}
        style={styles.authTextInput}
        placeholder="Password"
      />
      <Button onPress={handleSubmit}>Sign up</Button>
      <Text
        onPress={() => navigation.navigate("Signin")}
        style={styles.AuthOther}
      >
        Already have an account? Click here!
      </Text>
    </View>
  );
};

export default Signup;
