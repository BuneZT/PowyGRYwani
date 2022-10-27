import { defineStore } from "pinia";
import axios from "@/utils/axios";

export const gameStore = defineStore("game", {
  state: () => ({
    game: {
      name: "[Brak]",
      description: "[Brak]",
      studio: { name: "[Brak]", id: "new" },
      game: { name: "[Brak]", id: "new" },
      languages: [
        { name: "PL", id: "25" },
        { name: "DE", id: "26" },
      ],
      platforms: [
        { name: "PS3", id: "43" },
        { name: "PC", id: "73" },
      ],
      tags: [
        { name: "Mrok", id: "73" },
        { name: "RPG", id: "72" },
      ],
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
