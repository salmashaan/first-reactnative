import axios from "axios";

//home
export const baseURL = "http://192.168.3.14:8000";

//leap
// export const baseURL = "http://192.168.8.125:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

// export default instance;
