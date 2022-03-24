<script lang="ts">
import { defineComponent } from "vue";

import { prop, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { SwitchableProps, SwitchableSlots } from "./Switchable.extras";
import {
  injectDisable,
  injectSwitchableSettings,
  provideDisable
} from "./Switchable.extras";

export default defineComponent({
  name: "m-switchable",
  props: {
    disable: prop.boolean(),
    indent: prop.boolean()
  },
  setup(props) {
    validateProps<SwitchableProps>(props);

    const parentDisable = injectDisable();

    provideDisable(() => parentDisable.value || props.disable);

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
    class="m-switchable"
    :class="{
      'm-indent': indent
    }"
  >
    <slot :name="slotNames.default"></slot>
  </div>
  <q-slide-transition
    v-else-if="settings.transition === 'slide'"
    class="m-switchable"
    :class="{
      'm-indent': indent
    }"
    :duration="settings.transitionDuration"
  >
    <div v-if="!disable">
      <slot :name="slotNames.default"></slot>
    </div>
  </q-slide-transition>
</template>
