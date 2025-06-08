"use client";

import axios from "axios";

const axiosHttp = axios.create({
  baseURL: "https://mandapaya.app/sumerce/api/",
});

axiosHttp.interceptors.request.use(
  async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 100));

    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    const activeToken = localStorage.getItem("session_active");

    config.headers.Authorization = `Bearer ${
      activeToken ? activeToken : cookieValue ?? ""
    }`;

    return config;
  },
  (error) => Promise.reject(error)
);

const logout = () => {
  document.cookie =
    "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "/";
};


axiosHttp.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      logout();
     } else  if (error.response?.status === 400) {
      console.log("Bad Request:", error.response.data);
     }
    return Promise.reject(error);
  }
);

export default axiosHttp;
