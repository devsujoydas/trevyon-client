import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});
 
api.interceptors.request.use(
  (config) => {
    // console.log(`[API REQUEST] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      `[API ERROR] ${error.config?.method?.toUpperCase()} ${error.config?.baseURL}${error.config?.url}`,
      error.response?.data || error.message
    );

    if (error.response?.status === 401) {
      // Optional: auto logout logic if needed
      // e.g., setUser(null) in AuthProvider
    }

    return Promise.reject(error);
  }
);

export default api;
