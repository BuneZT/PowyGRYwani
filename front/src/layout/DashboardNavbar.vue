<template>
  <base-nav
    class="navbar-top navbar-dark"
    id="navbar-main"
    :show-toggle-button="false"
    expand
  >
    <form
      class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
    >
      <div class="form-group mb-0">
        <base-input
          placeholder="Szukaj"
          class="input-group-alternative"
          alternative=""
          addon-right-icon=""
          v-model="searchQuery"
          @keypress.enter="search"
        >
        </base-input>
        <i style="cursor: pointer" class="pl-3 fas fa-search" @click="search" />
      </div>
    </form>
    <ul
      class="navbar-nav align-items-center d-none d-md-flex"
      style="cursor: pointer"
    >
      <li class="nav-item dropdown">
        <router-link
          v-if="!displayName"
          style="color: white"
          :to="{ name: 'login' }"
        >
          <i class="ni ni-single-02 mr-2"></i>
          <span>Zaloguj się</span>
        </router-link>
        <base-dropdown v-else class="nav-link pr-0">
          <template v-slot:title>
            <div v class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img
                  alt="Image placeholder"
                  src="img/theme/team-4-800x800.jpg"
                />
              </span>
              <div class="media-body ml-2 d-none d-lg-block">
                <span class="mb-0 text-sm font-weight-bold">
                  {{ displayName }}
                </span>
              </div>
            </div>
          </template>
          <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">Witaj!</h6>
          </div>
          <router-link :to="`/profile/${profile.id}`" class="dropdown-item">
            <i class="ni ni-single-02"></i>
            <span>Mój profil</span>
          </router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click.prevent="logout">
            <i class="ni ni-user-run"></i>
            <span>Wyloguj się</span>
          </a>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
import { mapState } from "pinia";
import { authStore } from "@/stores/auth";

export default {
  data() {
    return {
      authStore: authStore(),
      activeNotifications: false,
      showMenu: false,
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "search", query: { query: this.searchQuery } });
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },

    logout() {
      this.authStore.logout();
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    displayName() {
      return this.profile.id
        ? `${this.profile.name} ${this.profile.surname}`
        : "";
    },
    ...mapState(authStore, ["profile"]),
  },
};
</script>

<style scoped>
.input-group-alternative {
  color: red !important;
}
</style>
