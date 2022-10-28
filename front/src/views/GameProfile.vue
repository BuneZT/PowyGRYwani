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
                  <img src="img/theme/game.jpg" class="rounded-circle" />
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
                  ></div>
                </div>
              </div>
              <div class="text-center">
                <h2>
                  {{ model.name }}
                </h2>
                <hr />

                <h3>
                  Studio:
                  <router-link
                    class="font-weight-light"
                    :to="{ name: 'studio', params: { id: model.studio.id } }"
                  >
                    <span>
                      {{ model.studio.name }}
                    </span>
                  </router-link>
                </h3>

                <h3>
                  Seria:
                  <router-link
                    class="font-weight-light"
                    :to="{ name: 'series', params: { id: model.series.id } }"
                  >
                    <span>
                      {{ model.series.name }}
                    </span>
                  </router-link>
                </h3>

                <h3>
                  Opis:
                  <p>{{ model.description }}</p>
                </h3>
              </div>
              <div class="row float-right">
                <router-link
                  v-if="isUser()"
                  :to="{ name: 'gameEdit', params: { id: 'new' } }"
                  class="btn btn-primary mt-2"
                >
                  Dodaj grę
                </router-link>

                <router-link
                  v-if="isAdmin"
                  :to="{ name: 'gameEdit', params: { id: model.id } }"
                  class="btn btn-info mt-2"
                >
                  Edytuj grę
                </router-link>

                <button
                  v-if="isAdmin"
                  class="btn btn-danger mt-2"
                  @click="deleteGame"
                >
                  Usuń grę
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { isUser } from "@/utils/authUtils";
import { mapState } from "pinia";
import { gameStore } from "@/stores/game";
import { authStore } from "@/stores/auth";
export default {
  data() {
    return {
      model: {},
    };
  },
  computed: {
    ...mapState(gameStore, ["game"]),
    ...mapState(authStore, ["isAdmin"]),
  },
  methods: {
    fillModel() {
      this.model = { ...this.game };
    },

    deleteGame() {
      if (confirm("Potwierdź usunięcie")) {
        this.axios.delete(`/games/${this.$route.params.id}`).then(() => {
          this.$router.push({ name: "search" });
        });
      }
    },
    isUser,
  },
  created() {
    this.fillModel();
  },
};
</script>
<style></style>
