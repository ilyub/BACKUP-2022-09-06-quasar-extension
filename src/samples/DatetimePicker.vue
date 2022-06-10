<script lang="ts">
import { DatetimePicker } from "./DatetimePicker.extras";
import { datetime } from "@skylib/facades";
import { as, is } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "sample-datetime-picker",
  setup: () => {
    const form = ref<extras.Form.Global>();

    const value1 = ref<string>();

    const value2 = ref<string>();

    const value3 = ref<string>();

    const value4 = ref<string>();

    return {
      form,
      lang: DatetimePicker.lang,
      lk: DatetimePicker.lang.keys,
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
      value4
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-form ref="form" @submit="$q.notify(lang.Submitted)">
      <m-form-section>
        <m-datetime-picker
          v-model="value1"
          :label="lk.Date"
          :max="max"
          :min="min"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value2"
          :label="lk.ValidateOnInput"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value3"
          :label="lk.ValidateOnChange"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value4"
          :label="lk.ValidateOnSubmit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker disable :label="lk.Disabled" />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">{{ lang.Submit }}</m-form-button>
        <m-form-button @click="reset">{{ lang.Reset }}</m-form-button>
        <m-form-button @click="resetValidation">
          {{ lang.ResetValidation }}
        </m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
