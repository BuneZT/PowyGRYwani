import { defineStore } from "pinia";
import axios from "@/utils/axios";

export const seriesStore = defineStore("series", {
  state: () => ({
    series: {
      name: "",
      description: "",
    },
    seriesList: [],
  }),
  actions: {
    fetchSeries(id) {
      return axios.get(`/series/${id}`).then((response) => {
        this.series = { ...this.series, ...response.data };
      });
    },
    fetchSeriesList() {
      return axios.get(`/series`).then((series) => {
        this.seriesList = series.data;
      });
    },
    setSeries(series) {
      this.series = series;
    },
  },
});
