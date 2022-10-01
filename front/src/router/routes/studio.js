import StudioProfile from "../../views/StudioProfile.vue";
import StudioEdit from "../../views/StudioEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";

const studio = {
  path: "/studio/:id",
  component: EmptyRoute,
  children: [
    {
      path: "",
      name: "studio",
      components: { default: StudioProfile },
    },
    {
      path: "edit",
      name: "studioEdit",
      components: { default: StudioEdit },
    },
  ],
};

export default studio;
