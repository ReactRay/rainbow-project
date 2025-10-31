import axios from "axios";

// ✅ Change baseURL to your deployed API
const api = axios.create({
    baseURL: "https://app-rainbow-eastus-dev-001-btgxcnb7apapcbgs.westeurope-01.azurewebsites.net/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ Automatically attach JWT token if stored
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
