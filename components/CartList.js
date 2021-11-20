import { HStack, Center, Button } from "native-base";
import React from "react";
import { View, Text, Alert } from "react-native";
import CartItem from "./CartItem";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import { NavigationContainer } from "@react-navigation/native";

function CartList({ navigation }) {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));

  const handlePress = () => {
    if (authStore.user) {
      cartStore.checkout();
    } else {
      Alert.alert("Sign in", "You need to be signed in to checkout", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sign in", onPress: () => navigation.navigate("Signin") },
      ]);
    }
  };
  return (
    <View>
      <Text>{cartList}</Text>
      <Button onPress={handlePress}> Checkout </Button>
    </View>
  );
}

export default observer(CartList);

//1:05:29
//alert and sign in page works
