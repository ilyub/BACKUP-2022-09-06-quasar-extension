<script lang="ts">
import { generic } from "..";
import { as, is, o } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";

export default defineComponent({
  name: "sample-field",
  components: {
    // eslint-disable-next-line vue/component-options-name-casing -- Wait for https://github.com/vuejs/eslint-plugin-vue/issues/1908
    "m-field__string": generic.Field<string>()
  },
  setup: () => {
    return {
      input: (
        event: Event,
        emitValue: extras.Field.ControlSlotData<string>["emitValue"]
      ): void => {
        emitValue(o.get(as.not.empty(event.target), "value", is.string));
      },
      value: ref("")
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-field__string v-model="value" label="Sample field">
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
