import { HStack, Center, Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import CartItem from "./CartItem";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";

function CartList() {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return (
    <View>
      <Text>{cartList}</Text>
      <Button onPress={cartStore.checkout}> Checkout </Button>
    </View>
  );
}

export default observer(CartList);
