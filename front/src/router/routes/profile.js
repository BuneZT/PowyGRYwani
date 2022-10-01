import Profile from "../../views/UserProfile.vue";
import ProfileEdit from "../../views/UserProfileEdit.vue";
import EmptyRoute from "../../layout/EmptyRoute.vue";

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
};

export default profile;
