<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-card" });
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
  <m-page-section>
    <m-card title="Title">
      <m-card-section>Section</m-card-section>
      <m-card-actions>
        <q-space />
        <m-form-button>Submit</m-form-button>
        <m-form-button>Reset</m-form-button>
      </m-card-actions>
    </m-card>
  </m-page-section>
  <m-page-section>
    <m-card title="Title" transparent-header>
      <m-card-section>Section</m-card-section>
      <m-card-actions>
        <q-space />
        <m-form-button>Submit</m-form-button>
        <m-form-button>Reset</m-form-button>
      </m-card-actions>
    </m-card>
  </m-page-section>
</template>
