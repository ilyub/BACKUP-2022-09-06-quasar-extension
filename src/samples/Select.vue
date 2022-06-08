<script lang="ts">
import { generic } from "..";
import { as, typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";

type Color = "blue" | "green" | "red";

export default defineComponent({
  name: "sample-select",
  components: { "select-value": generic.Select<Color>() },
  setup: () => {
    const form = ref<extras.Form.Global>();

    const value1 = ref<Color>();

    const value2 = ref<Color>();

    const value3 = ref<Color | undefined>("blue");

    return {
      form,
      options: typedef<extras.Select.Options<Color>>([
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" },
        {
          disable: true,
          label: "Red",
          value: "red"
        }
      ]),
      reset: (): void => {
        value1.value = undefined;
        value2.value = undefined;
        value3.value = "blue";
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
        <!-- eslint-disable-next-line @skylib/disallow-by-regexp -- Wait for @skylib/framework update -->
        <!-- fixme - use lang.keys.SelectColor, etc -->
        <select-value
          v-model="value1"
          label="Color"
          :options="options"
          required
          validation-label="Color"
        />
      </m-form-section>
      <m-form-section>
        <select-value
          v-model="value2"
          initial-label="SelectColor"
          :options="options"
          required
        />
      </m-form-section>
      <m-form-section>
        <select-value v-model="value3" :options="options" />
      </m-form-section>
      <m-form-section>
        <select-value disable initial-label="Disabled" :options="options" />
      </m-form-section>
      <m-form-actions>
        <m-form-button type="submit">Submit</m-form-button>
        <m-form-button @click="reset">Reset</m-form-button>
        <m-form-button @click="resetValidation">Reset validation</m-form-button>
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>
