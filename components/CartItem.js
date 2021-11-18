import { HStack, VStack, Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(item.product, value);
  };

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
        <Text>Price: {product.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Total: {item.quantity * product.price} KD</Text>
      </VStack>
      <VStack>
        <NumericInput
          minValue={1}
          value={quantity}
          onChange={(value) => handleAdd(value)}
        />
        <Button
          size="xs"
          onPress={() => cartStore.removeItemFromCart(product._id)}
        >
          {" "}
          Delete{" "}
        </Button>
      </VStack>
    </HStack>
  );
};

export default observer(CartItem);
