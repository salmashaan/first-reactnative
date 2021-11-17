import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => ({
          title: "Shops",
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ navigation, route }) => ({
          title: route.params.shop.name,
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
