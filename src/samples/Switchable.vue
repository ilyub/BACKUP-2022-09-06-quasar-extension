<script lang="ts">
import { generic } from "..";
import { Switchable } from "./Switchable.extras";
import { useInjections } from "./core";
import { typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";

type Options = extras.OptionGroup.Options<Transition>;

type Transition = extras.Switchable.Transition;

export default defineComponent({
  name: "sample-switchable",
  components: { "value-option-group": generic.OptionGroup<Transition>() },
  setup: () => {
    const { switchableTransition } = useInjections();

    return {
      disable: ref(false),
      lang: Switchable.lang,
      lk: Switchable.lang.keys,
      sampleKnob: ref(5),
      sampleToggle: ref(false),
      switchableTransition,
      switchableTransitionOptions: typedef<Options>([
        { label: Switchable.lang.keys.None, value: "none" },
        { label: Switchable.lang.keys.Slide, value: "slide" }
      ])
    };
  }
});
</script>

<template>
  <m-page-section>
    {{ lang.Transition }}:
    <value-option-group
      v-model="switchableTransition"
      inline
      :options="switchableTransitionOptions"
    />
  </m-page-section>
  <m-page-section>
    <m-section>
      <m-toggle v-model="disable" :label="lk.Disable" />
    </m-section>
    <m-section>
      <m-switchable :disable="disable" indent>
        <m-subsection>
          {{ lang.SampleKnob }}:
          <m-knob v-model="sampleKnob" inline :max="10" :step="1" />
        </m-subsection>
        <m-subsection>
          <m-toggle v-model="sampleToggle" :label="lk.SampleToggle" />
        </m-subsection>
      </m-switchable>
    </m-section>
  </m-page-section>
</template>
