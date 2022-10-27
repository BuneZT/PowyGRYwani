import GameProfile from "../../views/GameProfile.vue";
import GameEdit from "../../views/GameEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";
import { gameStore } from "@/stores/game";

const game = {
  path: "/game/:id",
  component: EmptyRoute,
  children: [
    {
      path: "",
      name: "game",
      components: { default: GameProfile },
    },
    {
      path: "edit",
      name: "gameEdit",
      components: { default: GameEdit },
    },
  ],
  beforeEnter: (to) => {
    if (to.params.id === "new") {
      return true;
    }
    return gameStore().fetchGame(to.params.id);
  },
};

export default game;
