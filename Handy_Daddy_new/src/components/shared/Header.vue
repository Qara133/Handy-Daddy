<template>
  <header>
    <div class="container-fluid d-flex gap-3 bg-dark align-items-center position-relative">
      <router-link :to="{ name: 'DesktopMain' }" class="logo z-1">
        <img src="/src/assets/images/Handy Daddy logo yellow 1.png" alt="logo">
      </router-link>

      <div class="menu d-sm-none d-lg-block d-none d-md-none">
        <div class="nav-menu d-flex justify-content-center align-items-center">
          <div class="mobile">
            <p class="ms-5">(+000) 000 00 00</p>
          </div>
          <nav>
            <ul class="navbar justify-content-between d-flex">
              <router-link :to="{ name: 'WhyUsPage' }" class="text-decoration-none text-light">
                <li>Why Us</li>
              </router-link>

              <li class="dropdown position-relative" ref="dropdownMenu">
                <a class="text-decoration-none" @click.stop="toggleDropdown">
                  Services <span><i class="fa-solid fa-chevron-down"></i></span>
                </a>
                <ul v-if="showDropdown" class="dropdown-menu bg-light rounded-2 p-2">
                  <li class="m-2">
                    <router-link :to="{ name: 'Repair' }" class="text-secondary text-decoration-none">
                      Appliance Repair
                    </router-link>
                  </li>
                  <hr class="text-secondary">
                  <li class="m-2">
                    <router-link :to="{ name: 'Installation' }" class="text-secondary text-decoration-none">
                      Appliance Installation
                    </router-link>
                  </li>
                </ul>
              </li>

              <router-link :to="{ name: 'Appliances' }" class="text-light text-decoration-none">
                <li>Appliances</li>
              </router-link>
              <router-link :to="{ name: 'Blog' }" class="text-light text-decoration-none">
                <li>Blog</li>
              </router-link>
              <router-link :to="{ name: 'ContactUsPage' }" class="text-light text-decoration-none">
                <li>Contact</li>
              </router-link>
            </ul>
          </nav>
          <div class="join-btn justify-content-center align-items-center">
            <div v-if="isLoggedIn" class="d-flex align-items-center">
              <button class="btn btn-light fw-semibold fs-6 mx-3 d-sm-none d-md-block d-none d-sm-block"
                @click="logout">
                Logout
              </button>
            </div>
            <router-link v-else :to="{ name: 'JoinUs' }">
              <button>JOIN US</button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="burger-menu fs-1 btn me-4 d-sm-block d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#sideMenu" aria-controls="sideMenu">
        <i class="fa-solid fa-bars text-end"></i>
      </div>
      <BurgerMenu></BurgerMenu>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { eventBus } from "@/eventBus";
import BurgerMenu from "../BurgerMenu.vue";

export default {
  name: "Header",
  components: { BurgerMenu },

  setup() {
    const router = useRouter();
    const isLoggedIn = ref(!!localStorage.getItem("authToken"));
    const userName = ref(localStorage.getItem("userName") || "User");
    const showDropdown = ref(false);
    const dropdownMenu = ref(null);

    const checkAuth = () => {
      isLoggedIn.value = !!localStorage.getItem("authToken");
      userName.value = localStorage.getItem("userName") || "User";
    };

    eventBus.on("authChange", () => {
      console.log("🔄 Navbar updated");
      checkAuth();
    });

    onMounted(() => {
      checkAuth();
      document.addEventListener("click", closeDropdownOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", closeDropdownOutside);
    });

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    const closeDropdownOutside = (event) => {
      if (dropdownMenu.value && !dropdownMenu.value.contains(event.target)) {
        showDropdown.value = false;
      }
    };

    const logout = () => {
      console.log("🚪 Logging Out...");
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      localStorage.removeItem("userName");

      isLoggedIn.value = false;
      eventBus.emit("authChange");
      router.push("/login");
    };

    return { isLoggedIn, userName, logout, showDropdown, toggleDropdown, dropdownMenu };
  },
};
</script>

<style scoped>
.join-btn button {
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.join-btn button:hover {
  background-color: rgba(255, 215, 0, 1) !important;
  color: black;
}

.dropdown {
  z-index: 3;
  max-width: 300px;
  position: relative;
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
  display: block;
  min-width: 205px;
}

.dropdown li a,
.dropdown li {
  transition: color 0.3s ease;
}

.dropdown li a:hover,
.dropdown li:hover {
  color: rgba(255, 215, 0, 1) !important;
}

/* HEADER AREA */
header {
  border-bottom: 1px solid rgba(255, 215, 0, 1);
}

.container-fluid .menu {
  margin-left: 200px !important;
  flex-wrap: nowrap;
}

header .container-fluid {
  color: white;
  position: relative;
  height: 100px;
}

header .logo img {
  width: 133px;
  height: 109px;
  top: 31px;
  left: 113px;
  position: absolute;
  margin-right: 125px;
}

header .mobile {
  color: rgba(255, 215, 0, 1);
}

.navbar {
  list-style: none;
  gap: 28px;
  padding-left: 67px;
  padding-right: 46px;
}

.navbar li span i {
  font-size: 12px;
  padding-left: 5px;
}

.navbar li a {
  color: white;
  text-decoration: none;
}

.navbar li:hover,
.navbar li a:hover {
  color: rgba(255, 215, 0, 1);
  cursor: pointer;
}

header .join-btn button {
  color: rgba(255, 215, 0, 1);
  border: 1px solid rgba(255, 215, 0, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  width: 104px;
  height: 39px;
  border-radius: 8px;
}

.offcanvas {
  max-width: 360px;
}

.burger-menu {
  position: absolute;
  right: 20px;
}

.burger-menu .fa-bars {
  color: white;
}

@media only screen and (max-width: 1255px) {
  .menu p {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
header .logo img  {
    position: absolute;  
    top: 5px;  
    left: 10px;  
    z-index: 100; 
}
}
</style>
