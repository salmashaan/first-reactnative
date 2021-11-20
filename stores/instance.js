import axios from "axios";

export const baseURL = "http://192.168.3.14:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

export default instance;
