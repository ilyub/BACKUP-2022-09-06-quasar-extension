<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { SwitchableProps } from "./Switchable.extras";
import { injectSwitchableSettings, provideDisable } from "./Switchable.extras";

export default defineComponent({
  name: "m-switchable",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as SwitchableProps),
    indent: propOptions.boolean(),
    on: propOptions.boolean()
  },
  setup(props: SetupProps<SwitchableProps>) {
    provideDisable(() => !props.on);

    return {
      settings: injectSwitchableSettings()
    };
  }
});
</script>

<template>
  <div
    v-if="settings.transition === 'none'"
    :class="{
      'm-indent': indent
    }"
  >
    <slot></slot>
  </div>
  <q-slide-transition
    v-else-if="settings.transition === 'slide'"
    :class="{
      'm-indent': indent
    }"
    :duration="settings.transitionDuration"
  >
    <div v-show="on">
      <slot></slot>
    </div>
  </q-slide-transition>
</template>
