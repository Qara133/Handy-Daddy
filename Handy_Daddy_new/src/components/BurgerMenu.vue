<template>
  <div class="burger-menu">
  
      <div
        class="offcanvas offcanvas-end bg-dark text-light"
        tabindex="-1"
        id="sideMenu"
        aria-labelledby="sideMenu"
       >
        <div class="offcanvas-header  d-flex justify-content-end">
          <button
            type="button"
            class="btn-close btn-close-white me-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-unstyled">
            <li class="mb-3">
              <router-link :to="{name:'WhyUsPage'}" class="text-decoration-none">Why us</router-link>
            </li>
            <li class="mb-3">
              <a
                class="text-decoration-none dropdown-toggle"
                data-bs-toggle="collapse"
                href="#servicesSubmenu"
                role="button"
                aria-expanded="false"
                aria-controls="servicesSubmenu"
              >
                Services
              </a>
              <div class="collapse ms-3" id="servicesSubmenu">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <router-link :to="{name:'Repair'}" class="text-decoration-none">Appliance Repair</router-link>
                  </li>
                  <li class="mb-2">
                    <router-link :to="{name:'Installation'}" class="text-decoration-none">Appliance Installation</router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-3">
              <router-link :to="{name:'Appliances'}" class="text-decoration-none">Appliances</router-link>
            </li>
            <li class="mb-3">
              <router-link :to="{name:'ContactUsPage'}" class="text-decoration-none">Contact</router-link>
            </li>
  
           
          </ul>
  
          <div class="text-center mb-4">
              <YellowBtn>CALL NOW</YellowBtn>
          </div>
  

             <li class="mb-4 list-unstyled mt-5">
              <router-link v-if="!isLoggedIn" :to="{name:'JoinUs'}" class="text-decoration-none join-btn btn py-2  w-100 btn-dark border rounded-2 text-warning fw-semibold fs-5">
                Join us
              </router-link>
              <button v-else @click="logout" class="btn py-2  w-100 btn-dark border rounded-2 text-warning fw-semibold fs-5">
                Logout
              </button>
            </li>

          <div class="text-start icons">
            <a href="https://www.facebook.com/?locale=ru_RU"><i class="fa-brands fa-facebook fs-5 me-3"></i></a>
            <a href="https://www.linkedin.com/home"><i class="fa-brands fa-youtube fs-5 me-3"></i></a>
            <a href="https://www.youtube.com/"><i class="fa-brands fa-linkedin fs-5"></i></a>
          </div>
          <p class="mt-5">© 2022 Handy Daddy | All rights reserved.</p>
        </div>
      </div>
          
  </div>
  </template>
  
  <script>
  import YellowBtn from "@/components/YellowBtn.vue";
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { eventBus } from "@/eventBus"; 
  
  export default {
    name: "BurgerMenu",
    components: { YellowBtn },
  
    setup() {
      const router = useRouter();
      const isLoggedIn = ref(!!localStorage.getItem("authToken"));
  
      const checkAuth = () => {
        isLoggedIn.value = !!localStorage.getItem("authToken");
      };
  
      eventBus.on("authChange", () => {
        console.log("🔄 Updating burger menu state...");
        checkAuth();
      });
  
      onMounted(() => {
        checkAuth();
      });
  
      const logout = () => {
        console.log("🚪 Logging Out...");
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        localStorage.removeItem("userName");
  
        isLoggedIn.value = false;
        eventBus.emit("authChange"); 
        router.push("/login");
      };
  
      return { isLoggedIn, logout };
    }
  };
  </script>
  
  <style scoped>
  .offcanvas {
    max-width: 300px;
    height: 800px;
  }
  
  .offcanvas .btn-close {
    color: white;
  }
  
  .offcanvas a {
    transition: color 0.3s ease;
    color: #fff;
  }
  
  .offcanvas-body ul a:hover {
    color:#ffc107;
  }
  
  .offcanvas .fa-brands {
    color: white;
    transition: color 0.3s ease;
  }
  
  .offcanvas .fa-brands:hover {
    color: #ffc107;
  }
  p{
      font-size: 10px;
  }
  .icons {
      margin-top: 230px;
  }
  .offcanvas-header .btn-close {
    position: absolute;
    right: 20px; 
    top: 20px; 
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: white;
    font-weight: bold;
    border-radius: 5px;
  }
  .btn-danger:hover {
    background-color: #b52b3a;
  }
  </style>
  