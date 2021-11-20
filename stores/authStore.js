import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      this.user = decode(token);
      console.log(this.user);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (userData, navigation) => {
    try {
      const response = await instance.post("/signup", userData);
      this.setUser(response.data.token);
      navigation.navigate("CartList");
      console.log(response.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData, navigation) => {
    try {
      const response = await instance.post("/signin", userData);
      this.setUser(response.data.token);
      navigation.goBack();
      console.log("authStore -> signin -> response.data", response.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  logout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now(); // give us the current time
        const tempUser = decode(token);
        if (tempUser.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.logout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
