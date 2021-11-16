import ProductItem from "./ProductItem";
import shopStore from "../stores/shopStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));
  return <View>{productList}</View>;
};

export default ProductList;

const styles = StyleSheet.create({});
