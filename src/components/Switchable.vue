<script lang="ts">
import { Switchable } from "./Switchable.extras";
import { injections, prop, validateProps } from "./api";
import { defineComponent } from "vue";

export default defineComponent({
  name: "m-switchable",
  props: { disable: prop.boolean(), indent: prop.boolean() },
  setup: props => {
    const globalDisable = injections.disable.inject();

    validateProps<Switchable.OwnProps>(props);
    injections.disable.provide(() => props.disable || globalDisable.value);

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
