import { defineStore } from "pinia";
import axios from "@/utils/axios";

export const studioStore = defineStore("studio", {
  state: () => ({
    studio: {
      name: "",
      description: "",
      games: [],
    },
    studios: [],
  }),
  actions: {
    fetchStudio(id) {
      return axios.get(`/studios/${id}`).then((response) => {
        this.studio = { ...this.studio, ...response.data };
      });
    },
    fetchStudios() {
      return axios.get(`/studios`).then((studios) => {
        this.studios = studios.data;
      });
    },
    setStudio(studio) {
      this.studio = studio;
    },
  },
});
