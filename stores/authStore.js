import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    // localStorage.setItem("myToken", token);
    this.user = decode(token);
    console.log(this.user);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  signup = async (userData, navigation) => {
    try {
      const response = await instance.post("/signup", userData);
      this.setUser(response.data.token);
      navigation.replace("Home");
      console.log(response.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData, navigation) => {
    try {
      const response = await instance.post("/signin", userData);
      this.setUser(response.data.token);
      navigation.replace("Home");
      console.log("authStore -> signin -> response.data", response.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  logout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  //   checkForToken = () => {
  //     // this.user = null
  //     const token = localStorage.getItem("myToken");
  //     if (token) {
  //       const currentTime = Date.now(); // give us the current time
  //       let tempUser = decode(token);
  //       if (tempUser.exp >= currentTime) {
  //         this.setUser(token);
  //       } else {
  //         this.logout();
  //       }
  //     }
  //   };
}

const authStore = new AuthStore();
// authStore.checkForToken();
export default authStore;
