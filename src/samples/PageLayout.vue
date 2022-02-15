<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-page-layout"
});
</script>

<template>
  <m-page-layout class="page-layout">
    <div class="bg-grey-3 q-pa-md">Content</div>
  </m-page-layout>
  <m-page-layout class="page-layout q-mt-md" title="Title">
    <div class="bg-grey-3 q-pa-md">Content</div>
  </m-page-layout>
  <m-page-layout class="page-layout q-mt-md" close-button title="Title">
    <div class="bg-grey-3 q-pa-md">Content</div>
  </m-page-layout>
</template>

<style lang="scss" scoped>
.page-layout {
  border: 1px solid red;
}
</style>
