<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { defineComponent } from "vue";

import PageLayout from "../components/PageLayout.vue";

export default defineComponent({
  name: "sample-page-layout",
  components: {
    "x-page-layout": PageLayout
  }
});
</script>

<template>
  <x-page-layout class="page-layout">
    <div class="bg-grey-3 q-pa-md">Content</div>
  </x-page-layout>
  <x-page-layout class="page-layout q-mt-md" title="Title">
    <div class="bg-grey-3 q-pa-md">Content</div>
  </x-page-layout>
  <x-page-layout class="page-layout q-mt-md" close-button title="Title">
    <div class="bg-grey-3 q-pa-md">Content</div>
  </x-page-layout>
</template>

<style lang="scss" scoped>
.page-layout {
  border: 1px solid red;
}
</style>
