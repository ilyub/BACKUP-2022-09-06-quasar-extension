<script lang="ts">
import { defineComponent, ref } from "vue";

import Knob from "../components/Knob.vue";
import Switchable from "../components/Switchable.vue";

export default defineComponent({
  name: "sample-switchable",
  components: {
    "x-knob": Knob,
    "x-switchable": Switchable
  },
  setup() {
    return {
      switchableOn: ref(true),
      switchableSampleKnob: ref(5)
    };
  }
});
</script>

<template>
  <q-toggle v-model="switchableOn" />
  <x-switchable :on="switchableOn">
    Sample knob
    <x-knob
      v-model="switchableSampleKnob"
      class="q-ml-sm"
      :max="10"
      :step="1"
    />
  </x-switchable>
</template>
