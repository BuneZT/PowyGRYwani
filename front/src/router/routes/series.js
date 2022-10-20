import Series from "../../views/SeriesProfile.vue";
import SeriesEdit from "../../views/SeriesEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";
import { seriesStore } from "@/stores/series";

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
  beforeEnter: (to) => {
    if (to.params.id === "new") {
      return true;
    }
    return seriesStore().fetchSeries(to.params.id);
  },
};

export default series;
