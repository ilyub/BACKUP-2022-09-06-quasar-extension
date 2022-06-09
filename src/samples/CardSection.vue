<script lang="ts">
import { CardSection } from "./CardSection.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-card-section",
  setup: () => {
    return { lang: CardSection.lang };
  }
});
</script>

<template>
  <m-page-section>
    <m-card>
      <m-card-section>{{ lang.Section }}</m-card-section>
      <m-card-actions>
        <q-space />
        <m-form-button>{{ lang.Submit }}</m-form-button>
        <m-form-button>{{ lang.Reset }}</m-form-button>
      </m-card-actions>
    </m-card>
  </m-page-section>
</template>
