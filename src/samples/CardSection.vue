<script lang="ts">
import { CardSection } from "./CardSection.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-card-section",
  setup: () => ({ lang: CardSection.lang, lk: CardSection.lang.keys })
});
</script>

<template>
  <m-page-section>
    <m-card>
      <m-card-section>{{ lang.Section }}</m-card-section>
      <m-card-actions>
        <q-space />
        <m-form-button :label="lk.Submit" />
        <m-form-button :label="lk.Reset" />
      </m-card-actions>
    </m-card>
  </m-page-section>
</template>
