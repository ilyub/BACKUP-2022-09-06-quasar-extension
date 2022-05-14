<script lang="ts">
import { useInjections } from "./core";
import { mdiImageEdit, mdiImageEditOutline } from "@mdi/js";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-icon-picker",
  setup: () => {
    const { iconPickerSmall, iconPickerTooltips } = useInjections();

    return {
      icon1: ref<string>(),
      icon2: ref<string>(),
      iconPickerSmall,
      iconPickerTooltips,
      mdiImageEdit,
      mdiImageEditOutline
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
    <m-icon-picker v-model="icon1" :placeholder="mdiImageEdit" />
    <m-icon-picker v-model="icon2" :placeholder="mdiImageEditOutline" />
    d = 30, f = 17
  </m-page-section>
</template>
