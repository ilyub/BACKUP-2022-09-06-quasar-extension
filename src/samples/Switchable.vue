<script lang="ts">
import { defineComponent, ref } from "vue";

import Knob from "../components/Knob.vue";
import Subsection from "../components/Subsection.vue";
import Switchable from "../components/Switchable.vue";
import Toggle from "../components/Toggle.vue";

export default defineComponent({
  name: "sample-switchable",
  components: {
    "m-knob": Knob,
    "m-subsection": Subsection,
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
  <m-subsection>
    <m-toggle v-model="on" />
  </m-subsection>
  <m-subsection>
    <m-switchable indent :on="on">
      <m-subsection>
        Sample knob:
        <m-knob v-model="sampleKnob" inline :max="10" :step="1" />
      </m-subsection>
      <m-subsection>
        <m-toggle v-model="sampleToggle" label="Sample toggle:" left-label />
      </m-subsection>
    </m-switchable>
  </m-subsection>
</template>
