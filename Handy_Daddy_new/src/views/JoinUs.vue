<template>
    <div class="join-us bg-light">
     <HeaderPoster>
         <h5 class="text-light text-center text-break">JOIN <span> US</span></h5>
     </HeaderPoster>
     <div class="container py-5">
         <h2 class="text-center">FILL AND JOIN US</h2>
         <div class="form-container my-5">
             <form @submit.prevent="submitForm">
                 <div class="row g-3">
                     <div class="col-md-6">
                         <label for="fullName" class="form-label">Full Name</label>
                         <input type="text" class="form-control" v-model="form.fullName" placeholder="Name Surname" required>
                     </div>
                     <div class="col-md-6">
                         <label for="email" class="form-label">E-mail</label>
                         <input type="email" class="form-control" v-model="form.email" placeholder="example@gmail.com" required>
                     </div>
                     <div class="col-md-6">
                         <label for="password" class="form-label">Password</label>
                         <input type="password" class="form-control" v-model="form.password" placeholder="Enter your password" required>
                     </div>
                     <div class="col-md-6">
                         <label for="confirmPassword" class="form-label">Confirm Password</label>
                         <input type="password" class="form-control" v-model="form.confirmPassword" placeholder="Confirm your password" required>
                     </div>
                     <div class="col-md-6">
                         <label for="fieldSelect" class="form-label">Select Field</label>
                         <select class="form-select" v-model="form.field">
                             <option value="Plumber">Plumber</option>
                             <option value="Home Appliance">Home Appliance</option>
                         </select>
                     </div>
                     <div class="col-12">
                         <label for="message" class="form-label">Your Message</label>
                         <textarea class="form-control" v-model="form.message" rows="4" placeholder="Write your message"></textarea>
                     </div>
                     <div class="col-12 d-flex align-items-center">
                         <div class="form-check ms-4 align-items-center">
                             <input class="form-check-input" type="checkbox" v-model="form.agreed">
                             <label class="form-check-label">
                                 Agree to <a href="#" class="text-decoration-underline text-secondary">Terms & Conditions</a>
                             </label>
                         </div>
                     </div>
                     <div class="col-12 text-center">
                         <button type="submit" class="btn btn-submit px-5 py-2" :disabled="loading">
                             {{ loading ? 'Registering...' : 'REGISTER' }}
                         </button>
                         <router-link :to="{name: 'Login'}" class="d-flex pt-3">
                             Already have an account?
                         </router-link>
                     </div>
                 </div>
             </form>
             <div v-if="responseMessage" class="alert alert-success mt-3 text-center">
                 {{ responseMessage }}
             </div>
             <div v-if="errorMessage" class="alert alert-danger mt-3 text-center">
                 {{ errorMessage }}
             </div>
         </div>
     </div>
    </div>
 </template>
 
 <script>
 import HeaderPoster from '@/components/HeaderPoster.vue';
 import authService from '@/authService';
 
 export default {
     name: "JoinUs",
     components: { HeaderPoster },
     data() {
         return {
             form: {
                 fullName: '',
                 email: '',
                 password: '',
                 confirmPassword: '',
                 field: 'Plumber',
                 message: '',
                 agreed: false,
             },
             loading: false,
             responseMessage: "",
             errorMessage: "",
         };
     },
     methods: {
        async submitForm() {
    this.errorMessage = "";
    this.responseMessage = "";


    if (!this.form.agreed) {
        this.errorMessage = "⚠️ You must agree to the terms and conditions.";
        return;
    }
    if (!this.form.fullName || !this.form.email || !this.form.password) {
        this.errorMessage = "⚠️ Please fill in all required fields!";
        return;
    }
    if (this.form.password.length < 6) {
        this.errorMessage = "⚠️ Password must be at least 6 characters!";
        return;
    }
    if (this.form.password !== this.form.confirmPassword) {
        this.errorMessage = "⚠️ Passwords do not match!";
        return;
    }

    this.loading = true;

    try {
        await authService.register({
            email: this.form.email,
            password: this.form.password
        });
        localStorage.setItem("userName", this.form.fullName);
        this.responseMessage = "🎉 Registration successful! Redirecting to login...";
        
        
        setTimeout(() => {
            this.$router.push({ name: "Login", query: { registered: true } });
        }, 2000);

    } catch (error) {
        this.errorMessage = error.response?.data?.error || "❌ Registration failed. Please try again.";
    } finally {
        this.loading = false;
    }
}
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
 .btn-submit {
     background-color: #FFD700;
     color: black;
     font-weight: bold;
 }
 .btn-submit:hover {
     background-color: #e5c100;
 }
 </style>
 