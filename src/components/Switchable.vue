<script lang="ts">
import { defineComponent } from "vue";

import { propOptions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";
import { injectSwitchableSettings, provideDisable } from "./Switchable.extras";

export default defineComponent({
  name: "m-switchable",
  props: {
    indent: propOptions.boolean(),
    on: propOptions.boolean(true)
  },
  setup(props) {
    validateProps<SwitchableProps>(props);
    provideDisable(() => !props.on);

    return {
      settings: injectSwitchableSettings(),
      slotNames: useSlotsNames<SwitchableSlots>()("default")
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
    <slot :name="slotNames.default"></slot>
  </div>
  <q-slide-transition
    v-else-if="settings.transition === 'slide'"
    :class="{
      'm-indent': indent
    }"
    :duration="settings.transitionDuration"
  >
    <div v-show="on">
      <slot :name="slotNames.default"></slot>
    </div>
  </q-slide-transition>
</template>
