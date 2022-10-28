import { defineStore } from "pinia";
import axios from "@/utils/axios";

export const gameStore = defineStore("game", {
  state: () => ({
    game: {
      name: "[Brak]",
      description: "[Brak]",
      studio: { name: "[Brak]", id: "new" },
      game: { name: "[Brak]", id: "new" },
    },
  }),
  actions: {
    fetchGame(id) {
      return axios.get(`/games/${id}`).then((response) => {
        this.game = { ...this.game, ...response.data };
      });
    },
    setGame(game) {
      this.game = game;
    },
  },
});
