import { defineStore } from "pinia";

import axios from "@/utils/axios";

const emptyProfile = {
  surname: "",
  email: "",
  password: "",
  isAdmin: false,
  name: "",
  id: null,
};

export const authStore = defineStore("auth", {
  state: () => ({
    profile: emptyProfile,
  }),
  actions: {
    login(login, password) {
      return axios.get(`/users/${login}/${password}`).then((response) => {
        this.profile = { ...this.profile, ...response.data };
        return response.data;
      });
    },
    logout() {
      this.profile = emptyProfile;
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
