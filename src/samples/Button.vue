<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-button"
});
</script>

<template>
  <m-button
    confirmation="Do you want to confirm button click?"
    @click="$q.notify('Click')"
    @confirmed-click="$q.notify('Confirmed click')"
  >
    Confirmation
  </m-button>
  <m-button tooltip="Down tooltip">Down</m-button>
  <m-button tooltip="Down tooltip" tooltip-direction="down">Down</m-button>
  <m-button tooltip="Left tooltip" tooltip-direction="left">Left</m-button>
  <m-button tooltip="Right tooltip" tooltip-direction="right">Right</m-button>
  <m-button tooltip="Up tooltip" tooltip-direction="up">Up</m-button>
</template>
