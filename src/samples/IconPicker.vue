<script lang="ts">
import { IconPicker } from "./IconPicker.extras";
import { useInjections } from "./core";
import { mdiImageEdit } from "@mdi/js";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-icon-picker",
  setup: () => {
    const { iconPickerCompact, iconPickerTooltips } = useInjections();

    return {
      icon: ref<string>(),
      iconPickerCompact,
      iconPickerTooltips,
      lk: IconPicker.lang.keys,
      mdiImageEdit,
      transcript: "d = 30, f = 17"
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-toggle v-model="iconPickerCompact" :label="lk.Compact" />
      <m-toggle v-model="iconPickerTooltips" :label="lk.Tooltips" />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-icon-picker v-model="icon" :placeholder="mdiImageEdit" />
    {{ transcript }}
  </m-page-section>
</template>
