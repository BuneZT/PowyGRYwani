import Series from "../../views/SeriesProfile.vue";
import SeriesEdit from "../../views/SeriesEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";

const series = {
  path: "/series/:id",
  component: EmptyRoute,
  children: [
    {
      path: "",
      name: "series",
      components: { default: Series },
    },
    {
      path: "edit",
      name: "seriesEdit",
      components: { default: SeriesEdit },
    },
  ],
};

export default series;
