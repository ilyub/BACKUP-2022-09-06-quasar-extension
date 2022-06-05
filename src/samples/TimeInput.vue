<script lang="ts">
import { useInjections } from "./core";
import { as, is } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { numberU } from "@skylib/functions";

export default defineComponent({
  name: "sample-time-input",
  setup: () => {
    const form = ref<extras.Form.Global>();

    const { language } = useInjections();

    const value1 = ref<number>();

    const value2 = ref<number>();

    const value3 = ref<number>();

    const value4 = ref<number>();

    const value5 = ref<numberU>(90);

    return {
      form,
      language,
      reset: (): void => {
        value1.value = undefined;
        value2.value = undefined;
        value3.value = undefined;
        value4.value = undefined;
        value5.value = undefined;
        as.not.empty(form.value).resetValidation();
      },
      resetValidation: (): void => {
        as.not.empty(form.value).resetValidation();
      },
      rules: [
        (value: numberU): string | true =>
          is.not.empty(value) && value % 2 === 1 ? "Invalid" : true
      ],
      value1,
      value2,
      value3,
      value4,
      value5
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-language-picker :language="language" />
  </m-page-section>
  <m-page-section>
    <m-form ref="form" @submit="$q.notify('Submitted')">
      <m-form-section>
        <m-time-input
          v-model="value1"
          clearable
          label="Time"
          :max="120"
          :min="15"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value2"
          label="Validate on input"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value3"
          label="Validate on change"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value4"
          label="Validate on submit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input disable label="Disabled" :model-value="undefined" />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value5"
          label="Placeholder"
          placeholder="##:##"
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
