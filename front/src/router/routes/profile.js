import Profile from "../../views/UserProfile.vue";
import ProfileEdit from "../../views/UserProfileEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";
import { userStore } from "@/stores/user";

const profile = {
  path: "/profile/:id",
  component: EmptyRoute,
  children: [
    {
      path: "",
      name: "profile",
      components: { default: Profile },
    },
    {
      path: "edit",
      name: "profileEdit",
      components: { default: ProfileEdit },
    },
  ],
  beforeEnter: (to) => {
    return userStore().fetchProfile(to.params.id);
  },
};

export default profile;
