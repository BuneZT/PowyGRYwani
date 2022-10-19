import { defineStore } from "pinia";
import axios from "axios";

export const userStore = defineStore("user", {
  state: () => ({ profile: null }),
  actions: {
    fetchProfileId(id) {
      return axios
        .get(`http://localhost:80/api/users/${id}`)
        .then((response) => {
          this.profile = response.data;
        });
    },
  },
});
