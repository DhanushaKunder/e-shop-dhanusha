import axios from "axios";

const BASE_URL = "https://eshop-dhanusha.herokuapp.com/api/";
// const TOKEN = 1234456;
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  //   .accessToken || "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  // header: { token: `Bearer ${TOKEN}` },
});