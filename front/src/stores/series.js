import { defineStore } from "pinia";
import axios from "@/utils/axios";

export const seriesStore = defineStore("series", {
  state: () => ({
    series: {
      name: "",
      description: "",
    },
  }),
  actions: {
    fetchSeries(id) {
      return axios.get(`/series/${id}`).then((response) => {
        this.series = { ...this.series, ...response.data };
      });
    },
    setSeries(series) {
      this.series = series;
    },
  },
});
