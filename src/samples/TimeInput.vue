<script lang="ts">
import { as, is } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { numberU } from "@skylib/functions";

export default defineComponent({
  name: "sample-time-input",
  setup: () => {
    const form = ref<extras.Form.Global>();

    const value1 = ref<number>();

    const value2 = ref<number>();

    const value3 = ref<number>();

    const value4 = ref<number>();

    const value5 = ref<number>();

    return {
      form,
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
    <m-form ref="form" @submit="$q.notify('Submitted')">
      <m-form-section>
        <!-- eslint-disable-next-line @skylib/disallow-by-regexp -- Wait for @skylib/framework update -->
        <!-- fixme - use lang.keys.***, etc -->
        <m-time-input
          v-model="value1"
          label="Time"
          :max="120"
          :min="15"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value2"
          label="ValidateOnInput"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value3"
          label="ValidateOnChange"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value4"
          label="ValidateOnSubmit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value5"
          label="Placeholder"
          placeholder="##:##"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input disable label="Disabled" :model-value="undefined" />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
