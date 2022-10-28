<template>
  <div class="row justify-content-center" style="min-height: 55vh">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div>
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
            >
            </base-input>

            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Hasło"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            >
            </base-input>

            <div class="text-center">
              <button class="btn btn-primary my-4" @click="login">
                Zaloguj się
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <router-link to="/register" class="text-light">
            <small>Stwórz konto</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { authStore } from "@/stores/auth";

export default {
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
      authStore: authStore(),
    };
  },
  methods: {
    login() {
      this.authStore
        .login(this.model.email, this.model.password)
        .then((user) =>
          this.$router.push({ name: "profile", params: { id: user.id } })
        )
        .catch(() => {
          alert("Zły login lub hasło");
        });
    },
  },
};
</script>
<style></style>
