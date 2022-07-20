<script lang="ts">
import { as, is, typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras, plugins } from "..";
import { Input } from "./Input.extras";
import { dump } from "@skylib/facades";
import type { stringU } from "@skylib/functions";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "sample-input",
  setup: (_props, { expose }) => {
    const { lang } = Input;

    const lk = lang.keys;

    const $q = useQuasar();

    const form = ref<extras.Form.Global>();

    const value1 = ref<string>();

    const value2 = ref<string>();

    const value3 = ref<string>();

    const value4 = ref<string>();

    const value5 = ref<string>();

    expose({});

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
      rules: typedef<plugins.validation.Rules<stringU>>([
        value =>
          is.not.empty(value) && value.includes("q") ? lk.Invalid : true
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
        <m-input v-model="value1" :label="lk.String" required />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value2"
          :label="lk.ValidateOnInput"
          :placeholder="lk.StringContaingQForError"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value3"
          :label="lk.ValidateOnChange"
          :placeholder="lk.StringContaingQForError"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value4"
          :label="lk.ValidateOnSubmit"
          :placeholder="lk.StringContaingQForError"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-input
          v-model="value5"
          :label="lk.Mask"
          mask="###"
          :placeholder="lang.plain('###')"
        />
      </m-form-section>
      <m-form-section>
        <m-input disable :label="lk.Disabled" />
      </m-form-section>
      <m-form-actions>
        <m-form-button :label="lk.Submit" type="submit" />
        <m-form-button :label="lk.Reset" @click="reset" />
        <m-form-button :label="lk.ResetValidation" @click="resetValidation" />
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
