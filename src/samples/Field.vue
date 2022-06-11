<script lang="ts">
import { generic } from "..";
import { Field } from "./Field.extras";
import { as, cast, o } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "sample-field",
  components: {
    // eslint-disable-next-line vue/component-options-name-casing -- Wait for https://github.com/vuejs/eslint-plugin-vue/issues/1908
    "m-field__string": generic.Field<stringU>()
  },
  setup: () => {
    return {
      input: (
        event: Event,
        emitValue: extras.Field.ControlSlotData<stringU>["emitValue"]
      ): void => {
        // eslint-disable-next-line no-restricted-syntax -- Ok
        emitValue(cast.stringU(o.get(as.not.empty(event.target), "value")));
      },
      lk: Field.lang.keys,
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
          :value="data.modelValue"
          @input="input($event, data.emitValue)"
        />
      </template>
    </m-field__string>
  </m-page-section>
</template>
