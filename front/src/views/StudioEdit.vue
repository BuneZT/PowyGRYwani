<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="background-size: cover; background-position: center top"
    >
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
        <div class="col-12">
          <card shadow type="secondary">
            <form>
              <h6 class="heading-small text-muted mb-4">Informacje o studiu</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Nazwa"
                      input-classes="form-control-alternative"
                      v-model="model.name"
                      :error="this.model.name.length < 3 && nameError"
                      :required="true"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 mb-3">
                    <label class="form-control-label">Opis</label>
                    <textarea
                      v-model="model.description"
                      class="form-control"
                      rows="3"
                    />
                  </div>
                </div>

                <a class="btn btn-info" @click.prevent="submit">
                  {{ isEdit ? "Edytuj studio" : "Dodaj studio" }}
                </a>
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";

import { studioStore } from "@/stores/studio";
import { authStore } from "@/stores/auth";
export default {
  name: "user-profile",
  data() {
    return {
      studioStore: studioStore(),
      model: {
        name: "",
        description: "",
      },
      nameError: "",
    };
  },

  computed: {
    isEdit() {
      return this.$route.params.id !== "new";
    },
    ...mapState(studioStore, ["studio"]),
    ...mapState(authStore, ["isAdmin"]),
  },

  methods: {
    fillModel() {
      this.model = { ...this.studio };
    },

    submit() {
      if (this.model.name.length < 3) {
        this.nameError = "Minimalna długość: 3";
        return;
      }

      if (this.isEdit) {
        this.axios
          .put(`/studios/${this.$route.params.id}`, this.model)
          .then(() => {
            alert("Studio zaktualizowe");
            this.studioStore.setStudio(this.model);
          });
      } else {
        this.axios.post(`/studios`, this.model).then((studio) => {
          this.studioStore.setStudio(this.model);
          this.$router.push({ name: "studio", params: { id: studio.data.id } });
        });
      }
    },
    checkAuth() {
      if (!this.isAdmin) {
        this.$router.push({ name: "login" });
      }
    },
  },

  created() {
    if (this.isEdit) {
      this.checkAuth();
      this.fillModel();
    }
  },
};
</script>
<style></style>
