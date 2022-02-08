<script lang="ts">
import { defineComponent } from "vue";

import Button from "../components/Button.vue";

export default defineComponent({
  name: "sample-button",
  components: {
    "x-button": Button
  }
});
</script>

<template>
  <x-button tooltip="Down tooltip">Down</x-button>
  <x-button tooltip="Down tooltip" tooltip-direction="down">Down</x-button>
  <x-button tooltip="Left tooltip" tooltip-direction="left">Left</x-button>
  <x-button tooltip="Right tooltip" tooltip-direction="right">Right</x-button>
  <x-button tooltip="Up tooltip" tooltip-direction="up">Up</x-button>
</template>
