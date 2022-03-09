<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-switchable",
  setup() {
    return {
      disable: ref(false),
      sampleKnob: ref(5),
      sampleToggle: ref(false)
    };
  }
});
</script>

<template>
  <m-subsection>
    <m-toggle v-model="disable" />
  </m-subsection>
  <m-subsection>
    <m-switchable :disable="disable" indent>
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
