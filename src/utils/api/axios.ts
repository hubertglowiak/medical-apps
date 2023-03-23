import axiosHandler from "axios";

export const axios = axiosHandler.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
