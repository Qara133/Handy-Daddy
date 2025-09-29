import { ref } from "vue";

export const isLoggedIn = ref(!!localStorage.getItem("authToken"));
export const userName = ref(localStorage.getItem("userName") || "User");

export const updateAuthState = () => {
    isLoggedIn.value = !!localStorage.getItem("authToken");
    userName.value = localStorage.getItem("userName") || "User";
};
