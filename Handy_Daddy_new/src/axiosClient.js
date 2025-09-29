import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://reqres.in/api", 
    headers: {
        "Content-Type": "application/json"
    }
});


axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem("authToken"); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("📤 Request Sent:", config);
    return config;
}, error => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(response => {
    console.log("📥 Response Received:", response);
    return response;
}, error => {
    if (error.response) {
        console.error("❌ API Error:", error.response.status, error.response.data);

        if (error.response.status === 401) {
            console.warn("🔐 Unauthorized - Redirecting to Login...");
            localStorage.removeItem("authToken"); 
            window.location.href = "/login"; 
        }
    } else {
        console.error("❌ Network/Server Error:", error.message);
    }

    return Promise.reject(error);
});

export default axiosClient;
