<template>
    <div class="login">
        <HeaderPoster>
            <h5 class="text-light text-center text-break">JOIN <span>US</span></h5>
        </HeaderPoster>

        <div class="form-container bg-light my-5">
            <h2 class="text-center">🔐 Login</h2>

           
            <p v-if="$route.query.registered" class="alert alert-success text-center">
                🎉 Registration successful! Please log in.
            </p>

         
            <form @submit.prevent="login" class="d-flex flex-column align-items-center">
                <div class="mb-3 w-50">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="credentials.email" required>
                </div>
                <div class="mb-3 w-50">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="credentials.password" required>
                </div>
                <button type="submit" class="btn btn-primary mt-3 py-2 fs-4 text-uppercase px-5">
                    {{ loading ? "Logging in..." : "Login" }}
                </button>
                <router-link :to="{ name: 'JoinUs' }" class="d-flex pt-3">
                    Haven't registered yet?
                </router-link>
            </form>

            <p v-if="errorMessage" class="text-danger text-center mt-3">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script>
import HeaderPoster from "@/components/HeaderPoster.vue";
import authService from "@/authService";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
    name: "Login",
    components: { HeaderPoster },
    setup() {
        const router = useRouter();
        const credentials = ref({ email: "", password: "" });
        const errorMessage = ref("");
        const loading = ref(false);

        const login = async () => {
            errorMessage.value = "";
            loading.value = true;

            try {
                console.log("📤 Attempting login with:", credentials.value);
                await authService.login(credentials.value);

                console.log("✅ Login Successful");
                updateAuthState();
                
                router.push({ name: "DesktopMain" });

            } catch (error) {
                console.error("❌ Login failed:", error.response?.data || error.message);
                errorMessage.value = "Invalid email or password!";
            } finally {
                loading.value = false;
            }
        };

        return { credentials, errorMessage, loading, login };
    }
};
</script>


<style scoped>

.poster-caption h5 {
    font-size: 60px;
    font-weight: 700;
  }
.poster-caption h5 span {
    color: #ffd700;
  }
.form-container {
    max-width: 800px;
    margin: auto;
    padding: 50px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 10px;
}
.btn {
    background-color: #FFD700;
    color: black;
    font-weight: bold;
}
.btn:hover {
    background-color: #e5c100;
}
</style>