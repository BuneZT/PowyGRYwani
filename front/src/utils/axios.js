import axiosInit from "axios";

const axios = axiosInit.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default axios;
