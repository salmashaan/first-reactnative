import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  addItemToCart(product, quantity) {
    const foundItem = this.items.find(
      (item) => item.product._id === product._id
    );
    if (foundItem) {
      foundItem.quantity = quantity;
    } else {
      const newItem = {
        product: product,
        quantity: quantity,
      };
      this.items.push(newItem);
    }
  }

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total = total + item.quantity));
    return total;
  }

  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = () => {
    this.items = [];
    alert("Thank you for shopping!");
  };

  items = [];
}

const cartStore = new CartStore();

export default cartStore;
