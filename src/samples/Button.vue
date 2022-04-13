<script lang="ts">
import { mdiCheck } from "@mdi/js";
import { wait } from "@skylib/functions/es/helpers";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-button",
  setup() {
    return {
      async asyncClick(): Promise<void> {
        await wait(3000);
      },
      icon: mdiCheck
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-button label="Click" @click="$q.notify('Click')" />
      <m-button
        confirmation="Do you want to confirm button click?"
        label="Confirmed click"
        @confirmed-click="$q.notify('Confirmed click')"
      />
      <m-button :async-click="asyncClick" label="Async click" />
      <m-button :async-click="asyncClick" :icon="icon" label="Async click" />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-buttons-group>
      <m-button label="Down" tooltip="Down" />
      <m-button label="Down" tooltip="Down" tooltip-direction="down" />
      <m-button label="Left" tooltip="Left" tooltip-direction="left" />
      <m-button label="Right" tooltip="Right" tooltip-direction="right" />
      <m-button label="Up" tooltip="Up" tooltip-direction="up" />
    </m-buttons-group>
  </m-page-section>
</template>
