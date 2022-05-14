<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-card-actions" });
</script>

<template>
  <m-page-section>
    <m-card>
      <m-card-section>Section</m-card-section>
      <m-card-actions>
        <q-space />
        <m-form-button>Submit</m-form-button>
        <m-form-button>Reset</m-form-button>
      </m-card-actions>
    </m-card>
  </m-page-section>
</template>
