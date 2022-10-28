<template>
  <label class="form-control-label">{{ label }}</label>
  <select class="form-control form-control-alternative" v-model="localModel">
    <option v-for="option in options" :value="option.id" :key="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    model: [Number, String],
    label: {
      type: [String],
    },
    options: Array,
  },
  data() {
    return {
      localModel: null,
    };
  },
  watch: {
    localModel(val) {
      if (val !== this.model) {
        this.$emit("update", this.model);
      }
    },
  },
  mounted() {
    this.localModel = this.model;
  },
};
</script>
