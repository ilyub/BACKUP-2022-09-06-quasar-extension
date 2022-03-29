<script lang="ts">
import { defineComponent, ref } from "vue";

import * as fn from "@skylib/functions/es/function";

import type { OptionGroupOptions } from "../components/OptionGroup.extras";
import type { Transition } from "../components/Switchable.extras";

import { useProvide } from "./useProvide";

export default defineComponent({
  name: "sample-switchable",
  setup() {
    const { switchableTransition } = useProvide();

    return {
      disable: ref(false),
      sampleKnob: ref(5),
      sampleToggle: ref(false),
      switchableTransition,
      // eslint-disable-next-line no-warning-comments
      // fixme: Use typedef
      switchableTransitionOptions: fn.run<OptionGroupOptions<Transition>>(
        () => [
          { label: "None", value: "none" },
          { label: "Slide", value: "slide" }
        ]
      )
    };
  }
});
</script>

<template>
  Transition:
  <m-option-group
    v-model="switchableTransition"
    inline
    :options="switchableTransitionOptions"
  />
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
