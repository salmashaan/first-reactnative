import { HStack, Center } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import CartItem from "./CartItem";
import cartStore from "../stores/cartStore";

function CartList() {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return (
    <View>
      <Text>{cartList}</Text>
    </View>
  );
}

export default CartList;
