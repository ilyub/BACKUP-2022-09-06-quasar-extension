<script lang="ts">
import { computed, defineComponent } from "vue";
import { injections, propFactory, validateProps } from "./api";
import { Switchable } from "./Switchable.extras";

const prop = propFactory<Switchable.OwnProps>();

export default defineComponent({
  name: "m-switchable",
  props: { disable: prop.boolean("disable"), indent: prop.boolean("indent") },
  setup: (props, { expose }) => {
    const globalDisable = injections.disable.inject();

    validateProps<Switchable.OwnProps>(props);
    expose();
    injections.disable.provide(
      computed(() => props.disable || globalDisable.value)
    );

    return { settings: Switchable.injectSettings() };
  }
});
</script>

<template>
  <div
    v-if="settings.transition === 'none'"
    class="m-switchable"
    :class="{ 'm-indent': indent }"
  >
    <slot></slot>
  </div>
  <q-slide-transition
    v-else-if="settings.transition === 'slide'"
    class="m-switchable"
    :class="{ 'm-indent': indent }"
    :duration="settings.transitionDuration"
  >
    <div v-if="!disable">
      <slot></slot>
    </div>
  </q-slide-transition>
</template>
