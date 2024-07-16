import Dashboard from "@/components/Dashboard.vue";
import LoginVue from "@/components/Login.vue";
import detailsOfCharacter from "@/components/detailsOfCharacter.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name:"login",
    component: LoginVue,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/detalles/:id",
    name: "detalles",
    component: detailsOfCharacter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
