<script lang="ts">
import { useInjections } from "./core";
import { as, is } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "sample-input",
  setup: () => {
    const form = ref<extras.Form.Global>();

    const { language } = useInjections();

    const value1 = ref<string>();

    const value2 = ref<string>();

    const value3 = ref<string>();

    const value4 = ref<string>();

    const value5 = ref<string>();

    const value6 = ref<string>();

    return {
      form,
      language,
      reset: (): void => {
        value1.value = undefined;
        value2.value = undefined;
        value3.value = undefined;
        value4.value = undefined;
        value5.value = undefined;
        value6.value = undefined;
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
      value5,
      value6
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
        <m-input v-model="value1" label="String" required />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value2"
          label="Validate on input"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value3"
          label="Validate on change"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value4"
          label="Validate on submit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input v-model="value5" clearable label="Clearable" />
      </m-form-section>
      <m-form-section>
        <m-input v-model="value6" label="Mask" mask="###" />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
