import ShopItem from "./ShopItem";
import shopStore from "../stores/shopStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";

const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));
  return <View>{shopList}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
