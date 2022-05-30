<script lang="ts">
import { useInjections } from "./core";
import { mdiCheck } from "@mdi/js";
import { wait } from "@skylib/functions";
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-base-button",
  setup: () => {
    const $q = useQuasar();

    const { baseButtonAnimateAsyncClick, baseButtonAnimateSubmitting } =
      useInjections();

    return {
      asyncClick: async (): Promise<void> => {
        await wait(3000);
      },
      baseButtonAnimateAsyncClick,
      baseButtonAnimateSubmitting,
      confirmedClick: (): void => {
        $q.notify("Confirmed click");
      },
      icon: mdiCheck,
      name: ref<string>(),
      submitAsync: async (): Promise<void> => {
        await wait(2000);
        $q.notify("Async submit");
      }
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-toggle
      v-model="baseButtonAnimateAsyncClick"
      label="Animate async click"
    />
    <m-toggle
      v-model="baseButtonAnimateSubmitting"
      label="Animate submitting"
    />
  </m-page-section>
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
  <m-page-section>
    <m-form
      async-task-type="httpRequest"
      :class="$style.form"
      @submit-async="submitAsync"
    >
      <m-form-section>
        <m-input v-model="name" label="Name" />
      </m-form-section>
      <m-form-actions>
        <m-form-button label="Async submit" type="submit" />
        <m-form-button label="Reset" @click="name = undefined" />
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>

<style lang="scss" module>
@use "sass:map";

.form {
  padding: map.get($space-md, "y") map.get($space-md, "x");
  border: 1px solid $grey-5;
}
</style>