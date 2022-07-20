<script lang="ts">
import { defineComponent, ref } from "vue";
import { BaseButton } from "./BaseButton.extras";
import { PromiseType } from "@skylib/facades";
import { mdiCheck } from "@mdi/js";
import { settings } from "./core";
import { useQuasar } from "quasar";
import { wait } from "@skylib/functions";

export default defineComponent({
  name: "sample-base-button",
  setup: (_props, { expose }) => {
    const { lang } = BaseButton;

    const lk = lang.keys;

    const $q = useQuasar();

    const { baseButtonAnimateAsyncClick, baseButtonAnimateSubmitting } =
      settings;

    expose({});

    return {
      PromiseType,
      asyncClick: async (): Promise<void> => {
        await wait(2000);
        $q.notify(lang.AsyncClick);
      },
      asyncSubmit: async (): Promise<void> => {
        await wait(2000);
        $q.notify(lang.Submitted);
      },
      baseButtonAnimateAsyncClick,
      baseButtonAnimateSubmitting,
      confirmedClick: (): void => {
        $q.notify(lang.ConfirmedClick);
      },
      icon: mdiCheck,
      lang,
      lk,
      name: ref<string>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-toggle
        v-model="baseButtonAnimateAsyncClick"
        :label="lk.AnimateAsyncClick"
      />
      <m-toggle
        v-model="baseButtonAnimateSubmitting"
        :label="lk.AnimateSubmitting"
      />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-base-button :label="lk.Click" @click="$q.notify(lang.Click)" />
  </m-page-section>
  <m-page-section>
    <m-buttons-group>
      <m-base-button :label="lk.AsyncClick" @async-click="asyncClick" />
      <m-base-button
        :icon="icon"
        :label="lk.AsyncClick"
        @async-click="asyncClick"
      />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-base-button
      :confirmation="lk.ConfirmationMessage"
      :confirmed-click="confirmedClick"
      :label="lk.ConfirmedClick"
    />
  </m-page-section>
  <m-page-section>
    <m-buttons-group>
      <m-base-button :label="lk.Down" :tooltip="lk.Down" />
      <m-base-button
        :label="lk.Down"
        :tooltip="lk.Down"
        tooltip-direction="down"
      />
      <m-base-button
        :label="lk.Left"
        :tooltip="lk.Left"
        tooltip-direction="left"
      />
      <m-base-button
        :label="lk.Right"
        :tooltip="lk.Right"
        tooltip-direction="right"
      />
      <m-base-button :label="lk.Up" :tooltip="lk.Up" tooltip-direction="up" />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-form
      :async-submit="asyncSubmit"
      :async-task-type="PromiseType.httpRequest"
      :class="$style.form"
    >
      <m-form-section>
        <m-input v-model="name" :label="lk.Name" />
      </m-form-section>
      <m-form-actions>
        <m-form-button :label="lk.AsyncSubmit" type="submit" />
        <m-form-button :label="lk.Reset" @click="name = undefined" />
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
