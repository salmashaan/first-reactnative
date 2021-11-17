import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import { baseURL } from "../stores/instance";
import { useState } from "react";
import cartStore from "../stores/cartStore";
import { HStack, VStack } from "native-base";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState[0];

  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(product, value);
  };

  return (
    <View w="100%" alignItems="center" space="3">
      <HStack>
        <Image
          source={{
            uri: baseURL + product.image,
          }}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
        <Text>{product.name}</Text>
        <VStack>
          <NumericInput
            minValue={1}
            value={quantity}
            onChange={(value) => handleAdd(value)}
          />
        </VStack>
      </HStack>
    </View>
  );
};

export default ProductItem;
