import React from "react";
import { useState } from "react";
import styles from "../../styles";
import { View, Text, TextInput } from "react-native";
import { Button } from "native-base";
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    console.log(user);
    await authStore.signin(user, navigation);
  };

  return (
    <>
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Sign in</Text>
        <TextInput
          onChangeText={(username) => setUser({ ...user, username })}
          style={styles.authTextInput}
          placeholder="Username"
        />
        <TextInput
          type="password"
          onChangeText={(password) => setUser({ ...user, password })}
          style={styles.authTextInput}
          placeholder="Password"
        />
        <Button onPress={handleSubmit}>Login</Button>
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={styles.AuthOther}
        >
          New user? Register here!
        </Text>
      </View>
    </>
  );
};

export default Signin;
