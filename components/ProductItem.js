import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";

const ProductItem = ({ product }) => {
  return (
    <View w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: baseURL + product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
    </View>
  );
};

export default ProductItem;
