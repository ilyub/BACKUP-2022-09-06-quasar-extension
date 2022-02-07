<script lang="ts">
import { computed, defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { SwitchablePropOptions } from "./Switchable.extras";
import { injectSwitchableSettings, provideDisable } from "./Switchable.extras";

export default defineComponent({
  name: "x-switchable",
  props: {
    on: propOptions.boolean()
  },
  setup(props: SetupProps<SwitchablePropOptions>) {
    const settings = injectSwitchableSettings();

    provideDisable(() => !props.on);

    return {
      cssTransitionDuration: computed<string>(
        () => `${settings.value.transitionDuration}ms`
      ),
      settings: injectSwitchableSettings()
    };
  }
});
</script>

<template>
  <div
    v-if="settings.transition === 'fade'"
    class="main"
    :style="{
      opacity: on ? 1 : settings.fadeOpacity
    }"
  >
    <slot></slot>
  </div>
  <q-slide-transition
    v-else-if="settings.transition === 'slide'"
    :duration="settings.transitionDuration"
  >
    <div v-show="on"><slot></slot></div>
  </q-slide-transition>
</template>

<style lang="scss" scoped>
.main {
  transition: opacity v-bind(cssTransitionDuration) ease;
}
</style>
