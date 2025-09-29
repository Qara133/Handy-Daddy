import axiosClient from "./axiosClient.js";
import { ref } from "vue";
import router from "@/router";
import { eventBus } from "@/eventBus"; 

const isAuthenticated = ref(!!localStorage.getItem("authToken"));
const userData = ref(JSON.parse(localStorage.getItem("userData")) || null);

const authService = {
    async register(user) {
        try {
            if (user.email === "eve.holt@reqres.in") {
                const response = await axiosClient.post("/register", {
                    email: user.email,
                    password: user.password
                });

                localStorage.setItem("userData", JSON.stringify(user)); 
                return response;
            } else {
                localStorage.setItem("userData", JSON.stringify(user));
                return { data: { message: "Fake registration successful" } };
            }
        } catch (error) {
            console.error("❌ Registration failed:", error.response?.data || error.message);
            throw error;
        }
    },

    async login(credentials) {
        try {
            console.log("📤 Sending login request with:", credentials);
            const response = await axiosClient.post("/login", {
                email: credentials.email,
                password: credentials.password
            });

            console.log("✅ API Login Success:", response.data);

            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("userName", credentials.email.split("@")[0]);

            isAuthenticated.value = true;
            userData.value = { email: credentials.email };

            eventBus.emit("authChange"); 

            router.push({ name: "DesktopMain" });
            return response;
        } catch (error) {
            console.error("❌ Login failed:", error.response?.data || error.message);
            throw error;
        }
    },

    logout() {
        console.log("🚪 Logging Out...");
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        localStorage.removeItem("userName");

        isAuthenticated.value = false;
        userData.value = null;

        eventBus.emit("authChange"); 
        router.push("/login");
    },

    isAuthenticated,
    userData
};

export default authService;
