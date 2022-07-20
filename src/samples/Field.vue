<script lang="ts">
import { as, cast, o } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import { Field } from "./Field.extras";
import type { extras } from "..";
import { generic } from "..";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "sample-field",
  components: { "m-field__string": generic.Field<stringU>() },
  setup: (_props, { expose }) => {
    const { lang } = Field;

    const lk = lang.keys;

    expose();

    return {
      format: cast.stringU,
      input: (
        event: Event,
        emitValue: Parameters<extras.Field.Slots["control"]>[0]["emitValue"]
      ): void => {
        emitValue(o.get(as.not.empty(event.target), "value"));
      },
      lk,
      value: ref<string>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-field__string v-model="value" :label="lk.SampleField">
      <template #control="data">
        <input
          class="q-field__input"
          :format="format"
          :value="data.modelValue"
          @input="input($event, data.emitValue)"
        />
      </template>
    </m-field__string>
  </m-page-section>
</template>
