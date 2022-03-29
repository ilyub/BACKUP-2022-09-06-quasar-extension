<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-form-button" });
</script>

<template>
  <m-form-button tooltip="Down tooltip">Down</m-form-button>
  <m-form-button tooltip="Down tooltip" tooltip-direction="down">
    Down
  </m-form-button>
  <m-form-button tooltip="Left tooltip" tooltip-direction="left">
    Left
  </m-form-button>
  <m-form-button tooltip="Right tooltip" tooltip-direction="right">
    Right
  </m-form-button>
  <m-form-button tooltip="Up tooltip" tooltip-direction="up">
    Up
  </m-form-button>
</template>
