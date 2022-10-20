import { defineStore } from "pinia";
import axios from "@/utils/axios";

export const userStore = defineStore("user", {
  state: () => ({
    profile: {
      email: "",
      name: "",
      surname: "",
    },
  }),
  actions: {
    fetchProfile(id) {
      return axios.get(`/users/${id}`).then((response) => {
        this.profile = response.data;
      });
    },
    setProfile(profile) {
      this.profile = profile;
    },
  },
});
