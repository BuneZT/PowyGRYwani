import GameProfile from "../../views/GameProfile.vue";
import GameEdit from "../../views/GameEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";
import { gameStore } from "@/stores/game";
import { studioStore } from "@/stores/studio";
import { seriesStore } from "@/stores/series";

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
      beforeEnter: () => {
        return Promise.all([
          studioStore().fetchStudios(),
          seriesStore().fetchSeriesList(),
        ]).then(() => true);
      },
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
