<template>
    <div v-if="showForm" class="form-modal" @click.self="closeForm">
        <div class="form-container" @click.stop>
            <div class="close-btn" @click="closeForm">&times;</div>
            <h5 class="text-center mb-4 fw-bold">We'll get back to you in 30 minutes!</h5>

            <div v-if="successMessage" class="alert alert-success text-center">
                {{ successMessage }}
            </div>

            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="form.fullName" placeholder="Full name" required />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="form.phone" placeholder="(+994)" required />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="form.address" placeholder="Address" required />
                </div>
                <div class="mb-3 d-flex gap-2">
                    <select class="form-select" v-model="form.timeSlot">
                        <option selected>09:00 - 12:00 AM</option>
                        <option>12:00 - 03:00 PM</option>
                        <option>03:00 - 06:00 PM</option>
                    </select>
                    <input type="date" class="form-control" v-model="form.date" required />
                </div>
                <div class="mb-3">
                    <select class="form-select" v-model="form.applianceType">
                        <option selected>Appliance Type</option>
                        <option>Refrigerator</option>
                        <option>Washing Machine</option>
                        <option>Microwave Oven</option>
                    </select>
                </div>
                <button type="submit" class="btn submit-btn w-100">
                    {{ loading ? "Submitting..." : "SUBMIT" }}
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderForm",
    props: {
        showForm: Boolean,
    },
    data() {
        return {
            form: {
                fullName: "",
                phone: "",
                address: "",
                timeSlot: "09:00 - 12:00 AM",
                date: "",
                applianceType: "Appliance Type",
            },
            successMessage: "",
            loading: false,
        };
    },
    methods: {
        closeForm() {
            this.$emit("update:showForm", false);
        },
        submitForm() {
            if (!this.form.fullName || !this.form.phone || !this.form.address || !this.form.date) {
                this.successMessage = "⚠️ Please fill in all required fields!";
                return;
            }

            this.loading = true;
            setTimeout(() => {
                this.successMessage = "🎉 Form submitted successfully!";
                this.loading = false;
                setTimeout(() => {
                    this.$emit("update:showForm", false); 
                    this.successMessage = "";
                }, 2000);
            }, 1500);
        },
    },
};
</script>

<style scoped>
.form-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
}

.form-container {
    background-color: #f9f9f9;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    position: relative;
}

.close-btn {
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    color: #000;
    position: absolute;
    right: 15px;
    top: 10px;
}

.form-control,
.form-select {
    border: 1px solid #ddd;
    height: 50px;
    font-size: 16px;
}

.submit-btn {
    background-color: #ffd700;
    color: black;
    font-weight: bold;
    height: 50px;
    border-radius: 5px;
    border: none;
}

.submit-btn:hover {
    background-color: #e5c100;
}
</style>
