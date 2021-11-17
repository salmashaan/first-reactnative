import { HStack, VStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";

const CartItem = ({ item }) => {
  const product = item.product;
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: baseURL + product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      <VStack>
        <Text bold>{product.name}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Total: {item.quantity * product.price} KD</Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;
