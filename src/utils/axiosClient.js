import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://172.16.38.160:5002/api",
  // ❌ REMOVE withCredentials
});

axiosClient.interceptors.request.use((config) => {
  const user = localStorage.getItem("actirepo_user");

  if (user) {
    const token = JSON.parse(user).token;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient;
