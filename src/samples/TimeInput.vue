<script lang="ts">
import { as, is, typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras, plugins } from "..";
import { TimeInput } from "./TimeInput.extras";
import { dump } from "@skylib/facades";
import type { numberU } from "@skylib/functions";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "sample-time-input",
  setup: (_props, { expose }) => {
    const { lang } = TimeInput;

    const lk = lang.keys;

    const $q = useQuasar();

    const form = ref<extras.Form.Global>();

    const value1 = ref<number>();

    const value2 = ref<number>();

    const value3 = ref<number>();

    const value4 = ref<number>();

    const value5 = ref<number>();

    expose();

    return {
      form,
      lang,
      lk,
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
      rules: typedef<plugins.validation.Rules<numberU>>([
        value => (is.not.empty(value) && value % 2 === 1 ? lk.Invalid : true)
      ]),
      submit: () => {
        $q.notify(
          dump([
            value1.value,
            value2.value,
            value3.value,
            value4.value,
            value5.value
          ])
        );
      },
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
    <m-form ref="form" @submit="submit">
      <m-form-section>
        <m-time-input
          v-model="value1"
          :label="lk.Time"
          :max="120"
          :min="15"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value2"
          :label="lk.ValidateOnInput"
          :placeholder="lk.OddNumberForError"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value3"
          :label="lk.ValidateOnChange"
          :placeholder="lk.OddNumberForError"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value4"
          :label="lk.ValidateOnSubmit"
          :placeholder="lk.OddNumberForError"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input
          v-model="value5"
          :label="lk.Placeholder"
          :placeholder="lang.plain('###:##')"
        />
      </m-form-section>
      <m-form-section>
        <m-time-input disable :label="lk.Disabled" :model-value="undefined" />
      </m-form-section>
      <m-form-actions>
        <m-form-button :label="lk.Submit" type="submit" />
        <m-form-button :label="lk.Reset" @click="reset" />
        <m-form-button :label="lk.ResetValidation" @click="resetValidation" />
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
