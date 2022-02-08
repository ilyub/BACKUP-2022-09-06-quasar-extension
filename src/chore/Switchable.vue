<script lang="ts">
import { defineComponent, ref } from "vue";

import Knob from "../components/Knob.vue";
import Section from "../components/Section.vue";
import Switchable from "../components/Switchable.vue";
import Toggle from "../components/Toggle.vue";

export default defineComponent({
  name: "sample-switchable",
  components: {
    "x-knob": Knob,
    "x-section": Section,
    "x-switchable": Switchable,
    "x-toggle": Toggle
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
  <q-toggle v-model="on" />
  <x-switchable class="q-pt-sm" :on="on">
    <x-section>
      Sample knob:
      <x-knob
        v-model="sampleKnob"
        class="pl-inline-input"
        :max="10"
        :step="1"
      />
    </x-section>
    <x-section>
      Sample toggle:
      <x-toggle v-model="sampleToggle" class="pl-inline-input" />
    </x-section>
  </x-switchable>
</template>
