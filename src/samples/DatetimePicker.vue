<script lang="ts">
import { useInjections } from "./core";
import { datetime } from "@skylib/facades";
import { as, is } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "sample-datetime-picker",
  setup: () => {
    const form = ref<extras.Form.Global>();

    const { language } = useInjections();

    const value1 = ref<string>();

    const value2 = ref<string>();

    const value3 = ref<string>();

    const value4 = ref<string>();

    const value5 = ref<string>();

    return {
      form,
      language,
      max: datetime
        .create()
        .setHours(12)
        .setMinutes(0)
        .add(3, "days")
        .add(2, "hours")
        .add(30, "minutes")
        .toString(),
      min: datetime
        .create()
        .setHours(12)
        .setMinutes(0)
        .sub(3, "days")
        .sub(2, "hours")
        .sub(30, "minutes")
        .toString(),
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
        (value: stringU): string | true =>
          is.not.empty(value) && value.endsWith("0") ? "Invalid" : true
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
        <m-datetime-picker
          v-model="value1"
          clearable
          label="Date"
          :max="max"
          :min="min"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value2"
          label="Validate on input"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value3"
          label="Validate on change"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value4"
          label="Validate on submit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker v-model="value5" clearable label="Clearable" />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker disable label="Disabled" />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
