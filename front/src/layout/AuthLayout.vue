<template>
  <div class="main-content bg-default">
    <!-- Navbar -->
    <base-nav
      class="navbar-top navbar-horizontal navbar-dark"
      containerClasses="px-4 container"
      expand
    >
      <!-- <router-link slot="brand" class="navbar-brand" to="/">
                <img src="img/brand/white.png"/>
            </router-link> -->

      <template v-slot="{ closeMenu }">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img src="img/brand/green.png" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                @click="closeMenu"
                class="navbar-toggler"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Navbar items -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/register">
              <i class="ni ni-circle-08"></i>
              <span class="nav-link-inner--text">Rejestracja</span>
            </router-link>
          </li>
          <li>
            <router-link class="nav-link nav-link-icon" to="/search">
              <i class="fas fa-search"></i>
              <span class="nav-link-inner--text">Wyszukiwarka</span>
            </router-link>
          </li>
        </ul>
      </template>
    </base-nav>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white">Witaj!</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <router-view></router-view>
    </div>
    <footer class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              &copy;
              <a
                href="https://gdansk.pja.edu.pl/pl/"
                class="font-weight-bold ml-1"
                target="_blank"
              >
                PJATK
              </a>
              {{ year }}
            </div>
          </div>
          <div class="col-xl-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-xl-end"
            >
              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "auth-layout",
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    };
  },
};
</script>
<style></style>
