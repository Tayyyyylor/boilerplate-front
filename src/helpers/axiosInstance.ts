import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL || "https://example.com",
});

export default axiosInstance;
