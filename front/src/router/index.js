import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Search from "../views/SearchPage.vue";

import profile from "./routes/profile";
import studio from "./routes/studio";
import game from "./routes/game";
import series from "./routes/series";

const routes = [
  {
    path: "/",
    redirect: "/search",
    component: DashboardLayout,
    children: [
      profile,
      studio,
      game,
      series,
      {
        path: "/search",
        name: "search",
        components: { default: Search },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
