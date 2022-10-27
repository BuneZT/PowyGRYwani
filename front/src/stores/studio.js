import { defineStore } from "pinia";
import axios from "@/utils/axios";

export const studioStore = defineStore("studio", {
  state: () => ({
    studio: {
      name: "",
      description: "",
      games: [],
    },
  }),
  actions: {
    fetchStudio(id) {
      return axios.get(`/studios/${id}`).then((response) => {
        this.studio = { ...this.studio, ...response.data };
      });
    },
    setStudio(studio) {
      this.studio = studio;
    },
  },
});
