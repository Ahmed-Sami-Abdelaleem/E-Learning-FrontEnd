const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const baseURL = "http://localhost:1337/api";

const axiosClint = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default axiosClint;
