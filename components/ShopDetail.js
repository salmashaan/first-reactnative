import React from "react";
import shopStore from "../stores/shopStore";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "../styles";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
import { baseURL } from "../stores/instance";
import ProductList from "../components/ProductList";

const ShopDetail = ({ navigation, route }) => {
  if (shopStore.loading) return <Spinner />;
  const shop = route.params.shop;

  return (
    <View style={styles.shopDetailWrapper}>
      <Image
        style={styles.shopDetailImage}
        source={{ uri: baseURL + shop.image }}
      />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <ProductList products={shop.products} />
    </View>
  );
};

export default observer(ShopDetail);
