<script lang="ts">
import { as, is } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { numberU } from "@skylib/functions";

export default defineComponent({
  name: "sample-numeric-input",
  setup: () => {
    const form = ref<extras.Form.Global>();

    const value1 = ref<number>();

    const value2 = ref<number>();

    const value3 = ref<number>();

    const value4 = ref<number>();

    const value5 = ref<number>();

    const value6 = ref<number>();

    const value7 = ref<number>();

    const value8 = ref<number>();

    return {
      form,
      reset: (): void => {
        value1.value = undefined;
        value2.value = undefined;
        value3.value = undefined;
        value4.value = undefined;
        value5.value = undefined;
        value6.value = undefined;
        value7.value = undefined;
        value8.value = undefined;
      },
      resetValidation: (): void => {
        as.not.empty(form.value).main.resetValidation();
      },
      rules: [
        (value: numberU): string | true =>
          is.not.empty(value) && value % 2 === 1 ? "Invalid" : true
      ],
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-form ref="form" @submit="$q.notify('Submitted')">
      <m-form-section>
        <m-numeric-input
          v-model="value1"
          label="Validate on input"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value2"
          label="Validate on change"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value3"
          label="Validate on submit"
          :rules-on-submit="rules"
        />
      </m-form-section>

      <m-form-section>
        <m-numeric-input v-model="value4" label="Optional" :max="59" />
      </m-form-section>
      <m-form-section>
        <m-numeric-input v-model="value5" label="Required" :max="59" required />
      </m-form-section>
      <m-form-section>
        <m-numeric-input disable label="Disabled" :model-value="undefined" />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value6"
          :big-step="15"
          label="Optional"
          :max="59"
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value7"
          :big-step="15"
          label="Required"
          :max="59"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value8"
          :big-step="15"
          label="Placeholder"
          :max="59"
          placeholder="###"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          :big-step="15"
          disable
          label="Disabled"
          :model-value="undefined"
        />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
