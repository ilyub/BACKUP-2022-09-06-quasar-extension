<script lang="ts">
import { defineComponent, ref } from "vue";
import { IconPicker } from "./IconPicker.extras";
import { mdiImageEdit } from "@mdi/js";
import { settings } from "./core";

export default defineComponent({
  name: "sample-icon-picker",
  setup: (_props, { expose }) => {
    const { lang } = IconPicker;

    const lk = lang.keys;

    const { iconPickerCompact, iconPickerTooltips } = settings;

    expose();

    return {
      icon: ref<string>(),
      iconPickerCompact,
      iconPickerTooltips,
      lk,
      mdiImageEdit,
      transcript: "d = 30, f = 17"
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-toggle v-model="iconPickerCompact" :label="lk.CompactSize" />
      <m-toggle v-model="iconPickerTooltips" :label="lk.ShowTooltips" />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-icon-picker v-model="icon" :placeholder="mdiImageEdit" />
    {{ transcript }}
  </m-page-section>
</template>
