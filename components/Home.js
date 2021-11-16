import React from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import { Button } from "native-base";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#000", fontSize: "28px", textAlign: "center" }}>
        Cookies and Beyond
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("ShopList");
        }}
      >
        Go to Shops
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
