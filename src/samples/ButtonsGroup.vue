<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-buttons-group" });
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-button label="Button 1" @click="$q.notify('Click 1')" />
      <m-button label="Button 2" @click="$q.notify('Click 2')" />
    </m-buttons-group>
  </m-page-section>
</template>
