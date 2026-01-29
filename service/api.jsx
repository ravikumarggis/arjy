// export const baseUrl = `http://172.16.16.39:8081/`;
// export const baseUrl = `http://172.16.16.206:8081/`;
export const baseUrl = `https://api-referral.tarality.io/`;
export const stateCityUrl = `https://stgapiv2.tarality.io/api/v1/bank/countryLisWithState`;

import axios from "axios";
const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          window.location.href = "/login";
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("An error occurred");
      }
    } else if (error.request) {
      console.error("No response received", error.request);
    } else {
      console.error("Request setup error", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
