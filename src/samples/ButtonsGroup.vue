<script lang="ts">
import { ButtonsGroup } from "./ButtonsGroup.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-buttons-group",
  setup: (_prop, { expose }) => {
    expose({});

    return { lang: ButtonsGroup.lang, lk: ButtonsGroup.lang.keys };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-button :label="lk.Button1" @click="$q.notify(lang.Click1)" />
      <m-button :label="lk.Button2" @click="$q.notify(lang.Click2)" />
    </m-buttons-group>
  </m-page-section>
</template>
