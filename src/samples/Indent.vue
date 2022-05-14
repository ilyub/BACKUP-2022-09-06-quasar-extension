<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-indent" });
</script>

<template>
  <m-page-section class="bg-grey-3">
    Outer
    <m-indent class="bg-grey-5">Inner</m-indent>
  </m-page-section>
</template>
