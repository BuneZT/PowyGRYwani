<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col">
          <h3 class="mb-0">Wynik wyszukiwania:</h3>
        </div>

        <div class="col d-flex justify-content-end">
          <router-link
            v-if="isUser"
            :to="{ name: 'gameEdit', params: { id: 'new' } }"
            class="btn btn-sm btn-primary"
          >
            Dodaj grę
          </router-link>

          <router-link
            v-if="isUser"
            :to="{ name: 'studioEdit', params: { id: 'new' } }"
            class="btn btn-sm btn-primary"
          >
            Dodaj studio
          </router-link>

          <router-link
            v-if="isUser"
            :to="{ name: 'seriesEdit', params: { id: 'new' } }"
            class="btn btn-sm btn-primary"
          >
            Dodaj serię
          </router-link>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template v-slot:columns>
          <th>Nazwa</th>
          <th>Typ</th>
        </template>

        <template v-slot:default="row">
          <th scope="row">
            <router-link
              :to="{
                name: getRouteType(row.item.type),
                params: { id: row.item.id },
              }"
            >
              {{ row.item.name }}
            </router-link>
          </th>
          <td>
            {{ translateType(row.item.type) }}
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { authStore } from "@/stores/auth";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    ...mapState(authStore, ["isUser"]),
  },
  methods: {
    getSearch() {
      this.axios.get(`/search/${this.$route.query.query}`).then((search) => {
        this.tableData = search.data;
      });
    },
    translateType(type) {
      if (type === "studio") {
        return "Studio";
      } else if (type === "game") {
        return "Gra";
      } else {
        return "Seria";
      }
    },
    getRouteType(type) {
      if (type === "studio") {
        return "studio";
      } else if (type === "game") {
        return "game";
      } else {
        return "series";
      }
    },
  },

  watch: {
    "$route.query.query"() {
      this.getSearch();
    },
  },
  created() {
    this.getSearch();
  },
};
</script>
<style></style>
