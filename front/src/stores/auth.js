import { defineStore } from "pinia";

import axios from "@/utils/axios";

export const authStore = defineStore("auth", {
  state: () => ({
    profile: {
      surname: "",
      email: "",
      password: "",
      isAdmin: false,
      name: "",
      id: null,
    },
  }),
  actions: {
    login(login, password) {
      return axios.get(`/users/${login}/${password}`).then((response) => {
        this.profile = { ...this.profile, ...response.data };
        return response.data;
      });
    },
  },
  getters: {
    isUser(state) {
      return state.profile.id !== null;
    },
    isAdmin(state) {
      return state.profile.isAdmin;
    },
  },
});
