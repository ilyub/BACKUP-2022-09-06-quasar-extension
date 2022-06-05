<script lang="ts">
import { useInjections } from "./core";
import { mdiImageEdit } from "@mdi/js";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-icon-picker",
  setup: () => {
    const { iconPickerSmall, iconPickerTooltips } = useInjections();

    return {
      icon: ref<string>(),
      iconPickerSmall,
      iconPickerTooltips,
      mdiImageEdit
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-toggle v-model="iconPickerSmall" label="Small" />
      <m-toggle v-model="iconPickerTooltips" label="Tooltips" />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-icon-picker v-model="icon" :placeholder="mdiImageEdit" />
    d = 30, f = 17
  </m-page-section>
</template>
