import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Button } from "native-base";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import ShopItem from "./components/ShopItem";
import ShopDetail from "./components/ShopDetail";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Home /> */}
        <ShopList />
        {/* <ShopDetail /> */}
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
