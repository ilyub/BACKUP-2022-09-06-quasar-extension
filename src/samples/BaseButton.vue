<script lang="ts">
import { mdiCheck } from "@mdi/js";
import { wait } from "@skylib/functions";
import { useQuasar } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-base-button",
  setup: () => {
    const $q = useQuasar();

    return {
      asyncClick: async (): Promise<void> => {
        await wait(3000);
      },
      confirmedClick: (): void => {
        $q.notify("Confirmed click");
      },
      icon: mdiCheck
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-base-button label="Click" @click="$q.notify('Click')" />
      <m-base-button :async-click="asyncClick" label="Async click" />
      <m-base-button
        :async-click="asyncClick"
        :icon="icon"
        label="Async click"
      />
      <m-base-button
        confirmation="Confirmation message"
        :confirmed-click="confirmedClick"
        label="Confirmed click"
      />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-buttons-group>
      <m-base-button label="Down" tooltip="Down" />
      <m-base-button label="Down" tooltip="Down" tooltip-direction="down" />
      <m-base-button label="Left" tooltip="Left" tooltip-direction="left" />
      <m-base-button label="Right" tooltip="Right" tooltip-direction="right" />
      <m-base-button label="Up" tooltip="Up" tooltip-direction="up" />
    </m-buttons-group>
  </m-page-section>
</template>
