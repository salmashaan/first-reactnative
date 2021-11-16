import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  shops = [];
  loading = true;

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      console.log(response.data);
      this.shops = response.data;
      this.loading = false;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
