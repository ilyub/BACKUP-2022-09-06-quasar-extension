<script lang="ts">
import { lang } from "./core";
import { as, is } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "sample-input",
  setup: () => {
    const form = ref<extras.Form.Global>();

    const value1 = ref<string>();

    const value2 = ref<string>();

    const value3 = ref<string>();

    const value4 = ref<string>();

    const value5 = ref<string>();

    return {
      form,
      keys: lang.keys,
      reset: (): void => {
        value1.value = undefined;
        value2.value = undefined;
        value3.value = undefined;
        value4.value = undefined;
        value5.value = "1";
        as.not.empty(form.value).resetValidation();
      },
      resetValidation: (): void => {
        as.not.empty(form.value).resetValidation();
      },
      rules: [
        (value: stringU): string | true =>
          is.not.empty(value) && value.includes("a") ? "Invalid" : true
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
        <m-input v-model="value1" :label="keys.String" required />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value2"
          label="ValidateOnInput"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value3"
          label="ValidateOnChange"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value4"
          label="ValidateOnSubmit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input v-model="value5" label="Mask" mask="###" placeholder="###" />
      </m-form-section>
      <m-form-section>
        <m-input disable label="Disabled" />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
