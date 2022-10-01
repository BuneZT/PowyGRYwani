import GameProfile from "../../views/GameProfile.vue";
import GameEdit from "../../views/GameEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";

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
};

export default game;
