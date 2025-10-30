import axios from "axios";

// 👇 Change to match your API port (from launchSettings.json)
const api = axios.create({
    baseURL: "https://localhost:7002/api", // or http://localhost:5001/api
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
