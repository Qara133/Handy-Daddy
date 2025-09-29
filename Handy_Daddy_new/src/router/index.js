import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/assets/layouts/DefaultLayout.vue";
import BlogDetails from "@/views/BlogDetails.vue";
import Blog from "@/views/Blog.vue";
import DesktopMain from "@/views/DesktopMain.vue";
import WhyUsPage from "@/views/WhyUsPage.vue";
import LotteryPage from "@/views/LotteryPage.vue";
import Repair from "@/views/Services/Repair.vue";
import Installation from "@/views/Services/Installation.vue";
import Appliances from "@/views/Services/Appliances.vue";
import FreezerRepair from "@/views/FreezerRepair.vue";
import RefrigeratorRepair from "@/views/RefrigeratorRepair.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";
import PrivacyPolicyPage from "@/views/PrivacyPolicyPage.vue";
import FAQ from "@/views/FAQ.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import JoinUs from "@/views/JoinUs.vue";
import LoginPage from "@/views/LoginPage.vue";
import authService from "@/authService";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/blog-details", name: "BlogDetails", component: BlogDetails },
      { path: "/blog", name: "Blog", component: Blog },
      { path: "/desktop-main", name: "DesktopMain", component: DesktopMain },
      { path: "/why-us", name: "WhyUsPage", component: WhyUsPage },
      { path: "/lottery", name: "LotteryPage", component: LotteryPage },
      { path: "/repair-service", name: "Repair", component: Repair },
      { path: "/installation-service", name: "Installation", component: Installation },
      { path: "/appliances", name: "Appliances", component: Appliances },
      { path: "/freezer-repair", name: "FreezerRepair", component: FreezerRepair },
      { path: "/refrigerator-repair", name: "RefrigeratorRepair", component: RefrigeratorRepair },
      { path: "/contact-us", name: "ContactUsPage", component: ContactUsPage },
      { path: "/privacy-policy", name: "PrivacyPolicyPage", component: PrivacyPolicyPage },
      { path: "/frequently-asked-questions", name: "FAQ", component: FAQ },
      { path: "/404-not-found", name: "NotFound", component: NotFoundPage },
      { path: "/join-us", name: "JoinUs", component: JoinUs },
      { path: "/login", name: "Login", component: LoginPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authService.isAuthenticated.value) {
    next("/login"); 
  } else if ((to.name === "Login" || to.name === "JoinUs") && authService.isAuthenticated.value) {
    next("/desktop-main"); 
  } else {
    next(); 
  }
});

export default router;
