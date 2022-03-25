<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-card"
});
</script>

<template>
  <m-page-section>
    <m-card>
      <m-card-section>Contents</m-card-section>
    </m-card>
  </m-page-section>
  <m-page-section>
    <m-card title="Title">
      <m-card-section>Contents</m-card-section>
    </m-card>
  </m-page-section>
  <m-page-section>
    <m-card title="Title" transparent-header>
      <m-card-section>Contents</m-card-section>
    </m-card>
  </m-page-section>
</template>
