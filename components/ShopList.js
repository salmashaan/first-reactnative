import ShopItem from "./ShopItem";
import shopStore from "../stores/shopStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { Button } from "native-base";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} navigation={navigation} key={shop._id} />
  ));
  return (
    <View>
      {shopList}
      {/* <Button
        onPress={() => {
          navigation.navigate("ShopDetail");
        }}
      >
        Go to Shop Detail
      </Button> */}
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({});
