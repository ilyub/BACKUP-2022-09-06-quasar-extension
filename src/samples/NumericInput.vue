<script lang="ts">
import { NumericInput } from "./NumericInput.extras";
import { as, is, typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras, plugins } from "..";
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

    return {
      form,
      lang: NumericInput.lang,
      lk: NumericInput.lang.keys,
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
        value => (is.not.empty(value) && value % 2 === 1 ? "Invalid" : true)
      ]),
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
    <m-form ref="form" @submit="$q.notify(lang.Submitted)">
      <m-form-section>
        <m-numeric-input
          v-model="value1"
          :big-step="15"
          :label="lk.Number"
          :max="59"
          :min="15"
          required
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value2"
          :label="lk.ValidateOnInput"
          :rules-on-input="rules"
          :small-step="2"
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value3"
          :big-step="15"
          :label="lk.ValidateOnChange"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value4"
          :big-step="15"
          :label="lk.ValidateOnSubmit"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input
          v-model="value5"
          :big-step="15"
          :label="lk.Placeholder"
          placeholder="###"
        />
      </m-form-section>
      <m-form-section>
        <m-numeric-input :big-step="15" disable :label="lk.Disabled" />
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
