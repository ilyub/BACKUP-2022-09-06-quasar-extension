<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { SwitchablePropOptions } from "./Switchable.extras";
import { injectSwitchableSettings, provideDisable } from "./Switchable.extras";

export default defineComponent({
  name: "m-switchable",
  props: {
    on: propOptions.boolean()
  },
  setup(props: SetupProps<SwitchablePropOptions>) {
    provideDisable(() => !props.on);

    return {
      settings: injectSwitchableSettings()
    };
  }
});
</script>

<template>
  <div v-if="settings.transition === 'none'">
    <slot></slot>
  </div>
  <q-slide-transition
    v-else-if="settings.transition === 'slide'"
    :duration="settings.transitionDuration"
  >
    <div v-show="on"><slot></slot></div>
  </q-slide-transition>
</template>
