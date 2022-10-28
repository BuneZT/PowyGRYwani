<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10"></div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-12 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <img
                    src="img/theme/team-4-800x800.jpg"
                    class="rounded-circle"
                  />
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between"></div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div
                    class="card-profile-stats d-flex justify-content-center mt-md-5"
                  >
                    <!-- TODO to implement in api -->
                    <!-- <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3>
                  {{ `${profile.name} ${profile.surname}` }} <br />
                  <span class="font-weight-light">{{ profile.email }}</span>
                </h3>
              </div>

              <div class="row float-right">
                <router-link
                  v-if="canEdit"
                  :to="{ name: 'profileEdit', params: { id: profile.id } }"
                  class="btn btn-info mt-2"
                >
                  Edytuj profil
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";

import { userStore } from "@/stores/user";
import { authStore } from "@/stores/auth";

export default {
  computed: {
    ...mapState(userStore, ["profile"]),
    ...mapState(authStore, {
      loggedUserProfile: "profile",
      isAdmin: "isAdmin",
    }),
    canEdit() {
      return this.isAdmin || this.loggedUserProfile.id == this.$route.params.id;
    },
  },
};
</script>
<style></style>
