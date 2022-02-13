<script lang="ts">
import { defineComponent, ref } from "vue";

import Knob from "../components/Knob.vue";
import Section from "../components/Section.vue";
import Switchable from "../components/Switchable.vue";
import Toggle from "../components/Toggle.vue";

export default defineComponent({
  name: "sample-switchable",
  components: {
    "m-knob": Knob,
    "m-section": Section,
    "m-switchable": Switchable,
    "m-toggle": Toggle
  },
  setup() {
    return {
      on: ref(true),
      sampleKnob: ref(5),
      sampleToggle: ref(false)
    };
  }
});
</script>

<template>
  <m-toggle v-model="on" />
  <m-switchable class="q-pt-sm" :on="on">
    <m-section>
      Sample knob:
      <m-knob
        v-model="sampleKnob"
        class="pl-inline-input"
        :max="10"
        :step="1"
      />
    </m-section>
    <m-section>
      Sample toggle:
      <m-toggle v-model="sampleToggle" class="pl-inline-input" />
    </m-section>
  </m-switchable>
</template>
