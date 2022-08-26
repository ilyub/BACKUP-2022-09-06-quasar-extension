<script lang="ts">
import { defineComponent, ref } from "vue";
import { extras, generic } from "..";
import { Switchable } from "./Switchable.extras";
import { settings } from "./core";
import { typedef } from "@skylib/functions";

const Transition = extras.Switchable.Transition;

type Options = extras.OptionGroup.Options<Transition>;

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
type Transition = extras.Switchable.Transition;

export default defineComponent({
  name: "sample-switchable",
  components: {
    "m-option-group__transition": generic.OptionGroup<Transition>()
  },
  setup: (_props, { expose }) => {
    const { lang } = Switchable;

    const lk = lang.keys;

    const { switchableTransition } = settings;

    expose();

    return {
      disable: ref(false),
      lang,
      lk,
      sampleKnob: ref(5),
      sampleToggle: ref(false),
      switchableTransition,
      switchableTransitionOptions: typedef<Options>([
        { label: lk.None, value: Transition.none },
        { label: lk.Slide, value: Transition.slide }
      ])
    };
  }
});
</script>

<template>
  <m-page-section>
    {{ lang.Transition }}:
    <m-option-group__transition
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
