<script lang="ts">
import { generic } from "..";
import { as, typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";

type Value = "a" | "b" | 1;

export default defineComponent({
  name: "sample-select",
  components: { "select-value": generic.Select<Value>() },
  setup: () => {
    const form = ref<extras.Form.Global>();

    const value1 = ref<Value | undefined>("a");

    const value2 = ref<Value>();

    const value3 = ref<Value>();

    return {
      form,
      options: typedef<extras.Select.Options<Value>>([
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        {
          disable: true,
          label: "Option 3",
          value: "b"
        }
      ]),
      reset: (): void => {
        value1.value = "a";
        value2.value = undefined;
        value3.value = undefined;
        as.not.empty(form.value).resetValidation();
      },
      resetValidation: (): void => {
        as.not.empty(form.value).resetValidation();
      },
      value1,
      value2,
      value3
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-form ref="form" @submit="$q.notify('Submitted')">
      <m-form-section>
        <select-value v-model="value1" :options="options" />
      </m-form-section>
      <m-form-section>
        <select-value v-model="value2" :options="options" required />
      </m-form-section>
      <m-form-section>
        <select-value
          v-model="value3"
          initial-label="Custom label"
          :options="options"
          required
        />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
