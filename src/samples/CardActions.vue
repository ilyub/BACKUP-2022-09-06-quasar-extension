<script lang="ts">
import { CardActions } from "./CardActions.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-card-actions",
  setup: (_prop, { expose }) => {
    const { lang } = CardActions;

    const lk = lang.keys;

    expose();

    return { lang, lk };
  }
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
