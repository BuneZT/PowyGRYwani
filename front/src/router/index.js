import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import GameProfile from "../views/GameProfile.vue";
import GameEdit from "../views/GameEdit.vue";

import Search from "../views/SearchPage.vue";
import Series from "../views/SeriesProfile.vue";
import SeriesEdit from "../views/SeriesEdit.vue";

import profile from "./routes/profile";
import studio from "./routes/studio";

const routes = [
  {
    path: "/",
    redirect: "/search",
    component: DashboardLayout,
    children: [
      profile,
      studio,
      {
        path: "/game/:id",
        name: "game",
        components: { default: GameProfile },
      },
      {
        path: "/gameEdit/:id",
        name: "gameEdit",
        components: { default: GameEdit },
      },
      {
        path: "/search",
        name: "search",
        components: { default: Search },
      },
      {
        path: "/series/:id",
        name: "series",
        components: { default: Series },
      },
      {
        path: "/seriesEdit/:id",
        name: "seriesEdit",
        components: { default: SeriesEdit },
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
