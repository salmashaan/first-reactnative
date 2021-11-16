import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { baseURL } from "../stores/instance";

const ShopItem = ({ shop }) => {
  <View>
    <Text>{shop.name}</Text>
    <Image
      source={{ uri: baseURL + shop.image }}
      style={{ height: 50, width: 50 }}
    />
  </View>;
};
export default ShopItem;

const styles = StyleSheet.create({});
