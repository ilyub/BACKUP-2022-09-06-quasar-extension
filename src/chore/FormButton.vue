<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { defineComponent } from "vue";

import FormButton from "../components/FormButton.vue";

export default defineComponent({
  name: "sample-form-button",
  components: {
    "x-form-button": FormButton
  },
  setup() {
    return {};
  }
});
</script>

<template>
  <x-form-button tooltip="Down tooltip">Down</x-form-button>
  <x-form-button tooltip="Down tooltip" tooltip-direction="down">
    Down
  </x-form-button>
  <x-form-button tooltip="Left tooltip" tooltip-direction="left">
    Left
  </x-form-button>
  <x-form-button tooltip="Right tooltip" tooltip-direction="right">
    Right
  </x-form-button>
  <x-form-button tooltip="Up tooltip" tooltip-direction="up">
    Up
  </x-form-button>
</template>
