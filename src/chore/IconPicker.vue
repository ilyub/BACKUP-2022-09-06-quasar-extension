<script lang="ts">
import { defineComponent, ref } from "vue";
import { mdiImageEdit, mdiImageEditOutline } from "@mdi/js";

import type { stringU } from "@skylib/functions/es/types/core";

import IconPicker from "../components/IconPicker.vue";

export default defineComponent({
  name: "sample-icon-picker",
  components: {
    "m-icon-picker": IconPicker
  },
  setup() {
    return {
      icon1: ref<stringU>(undefined),
      icon2: ref<stringU>(undefined),
      mdiImageEdit,
      mdiImageEditOutline
    };
  }
});
</script>

<template>
  <m-icon-picker v-model="icon1" :placeholder="mdiImageEdit" />
  <m-icon-picker
    v-model="icon2"
    :cols="2"
    :placeholder="mdiImageEditOutline"
    :rows="1"
    spinner-size="30px"
  />
  co = 2, rest = 5
</template>
