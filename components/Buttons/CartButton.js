import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const CartButton = ({ navigation }) => {
  return (
    <View>
      {/* <Text onPress={() => navigation.navigate("CartList")}>Cart</Text> */}
      <Icon
        style={{ marginRight: 10, color: "orange" }}
        size="21"
        name="shopping-cart"
        onPress={() => navigation.navigate("CartList")}
      />
    </View>
  );
};

export default CartButton;
