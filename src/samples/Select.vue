<script lang="ts">
import { as, typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import { Select } from "./Select.extras";
import type { extras } from "..";
import { generic } from "..";

enum Color {
  blue = "blue",
  green = "green",
  invalid = "invalid",
  red = "red"
}

export default defineComponent({
  name: "sample-select",
  components: { "m-select__value": generic.Select<Color>() },
  setup: (_props, { expose }) => {
    const { lang } = Select;

    const lk = lang.keys;

    const form = ref<extras.Form.Global>();

    const value1 = ref<Color>();

    const value2 = ref<Color>();

    const value3 = ref<Color>();

    const value4 = ref<Color>();

    const value5 = ref<Color | undefined>(Color.blue);

    expose();

    return {
      form,
      lang,
      lk,
      options: typedef<extras.Select.Options<Color>>([
        { label: lk.Blue, value: Color.blue },
        { label: lk.Green, value: Color.green },
        { disable: true, label: lk.Red, value: Color.red },
        { label: lk.Invalid, value: Color.invalid }
      ]),
      reset: (): void => {
        value1.value = undefined;
        value2.value = undefined;
        value3.value = undefined;
        value4.value = undefined;
        value5.value = Color.blue;
        as.not.empty(form.value).resetValidation();
      },
      resetValidation: (): void => {
        as.not.empty(form.value).resetValidation();
      },
      rules: [(value: Color) => (value === "invalid" ? lk.Invalid : true)],
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
        <m-select__value
          v-model="value1"
          :label="lk.Color"
          :options="options"
          required
          :validation-label="lk.Color"
        />
      </m-form-section>
      <m-form-section>
        <m-select__value
          v-model="value2"
          :initial-label="lk.ValidateOnInput"
          :options="options"
          :rules-on-input="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-select__value
          v-model="value3"
          :initial-label="lk.ValidateOnChange"
          :options="options"
          :rules-on-change="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-select__value
          v-model="value4"
          :initial-label="lk.ValidateOnSubmit"
          :options="options"
          :rules-on-submit="rules"
        />
      </m-form-section>
      <m-form-section>
        <m-select__value v-model="value5" :options="options" />
      </m-form-section>
      <m-form-section>
        <m-select__value
          disable
          :initial-label="lk.Disabled"
          :options="options"
        />
      </m-form-section>
      <m-form-actions>
        <m-form-button :label="lk.Submit" type="submit" />
        <m-form-button :label="lk.Reset" @click="reset" />
        <m-form-button :label="lk.ResetValidation" @click="resetValidation" />
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
