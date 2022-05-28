<script lang="ts">
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

    return {
      form,
      reset: (): void => {
        value1.value = undefined;
        value2.value = undefined;
        value3.value = undefined;
        value4.value = undefined;
      },
      resetValidation: (): void => {
        as.not.empty(form.value).main.resetValidation();
      },
      rules: [
        (value: stringU): string | true =>
          is.not.empty(value) && value.includes("a") ? "Invalid" : true
      ],
      value1,
      value2,
      value3,
      value4
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-form ref="form" @submit="$q.notify('Submitted')">
      <m-form-section>
        <m-input
          v-model="value1"
          label="Validate on input"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value2"
          label="Validate on change"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value3"
          label="Validate on submit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input v-model="value4" clearable label="Clearable" />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
