import React from "react";
import shopStore from "../stores/shopStore";
import { StyleSheet, Text, View } from "react-native";

const ShopDetail = () => {
  const shop = shopStore.shops[0];

  return (
    <View style={styles.shopDetailWrapper}>
      <Image
        style={styles.shopDetailImage}
        source={{ uri: baseURL + shop.image }}
      />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <ProductsList products={shop.products} />
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  shopDetailWrapper: {
    marginTop: 50,
  },
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  shopDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
