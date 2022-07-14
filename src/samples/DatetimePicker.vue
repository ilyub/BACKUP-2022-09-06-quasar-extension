<script lang="ts">
import { as, is, typedef } from "@skylib/functions";
import { datetime, dump } from "@skylib/facades";
import { defineComponent, ref } from "vue";
import type { extras, plugins } from "..";
import { DatetimePicker } from "./DatetimePicker.extras";
import type { stringU } from "@skylib/functions";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "sample-datetime-picker",
  setup: (_props, { expose }) => {
    const $q = useQuasar();

    const form = ref<extras.Form.Global>();

    const value1 = ref<string>();

    const value2 = ref<string>();

    const value3 = ref<string>();

    const value4 = ref<string>();

    expose({});

    return {
      form,
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
      rules: typedef<plugins.validation.Rules<stringU>>([
        value =>
          is.not.empty(value) && value.endsWith("0")
            ? DatetimePicker.lang.keys.Invalid
            : true
      ]),
      submit: () => {
        $q.notify(
          dump([value1.value, value2.value, value3.value, value4.value])
        );
      },
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
    <m-form ref="form" @submit="submit">
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
          :placeholder="lk.EvenSecondsForError"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value3"
          :label="lk.ValidateOnChange"
          :placeholder="lk.EvenSecondsForError"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker
          v-model="value4"
          :label="lk.ValidateOnSubmit"
          :placeholder="lk.EvenSecondsForError"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-datetime-picker disable :label="lk.Disabled" />
      </m-form-section>
      <m-form-actions>
        <m-form-button :label="lk.Submit" type="submit" />
        <m-form-button :label="lk.Reset" @click="reset" />
        <m-form-button :label="lk.ResetValidation" @click="resetValidation" />
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
