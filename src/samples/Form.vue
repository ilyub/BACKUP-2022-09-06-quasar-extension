<script lang="ts">
import { defineComponent, ref } from "vue";
import { Form } from "./Form.extras";
import { PromiseType } from "@skylib/facades";
import { useQuasar } from "quasar";
import { wait } from "@skylib/functions";

export default defineComponent({
  name: "sample-form",
  setup: (_props, { expose }) => {
    const { lang } = Form;

    const lk = lang.keys;

    const $q = useQuasar();

    expose();

    return {
      PromiseType,
      asyncSubmit: async (): Promise<void> => {
        await wait(2000);
        $q.notify(lang.Submitted);
      },
      lk,
      name1: ref<string>(),
      name2: ref<string>(),
      submit: (): void => {
        $q.notify(lang.Submitted);
      }
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-form :class="$style.form" @submit="submit">
      <m-form-section>
        <m-input v-model="name1" :label="lk.SampleField" />
      </m-form-section>
      <m-form-actions>
        <m-form-button :label="lk.Submit" type="submit" />
        <m-form-button :label="lk.Reset" @click="name1 = undefined" />
      </m-form-actions>
    </m-form>
  </m-page-section>
  <m-page-section>
    <m-form
      :async-submit="asyncSubmit"
      :async-task-type="PromiseType.httpRequest"
      :class="$style.form"
    >
      <m-form-section>
        <m-input v-model="name2" :label="lk.SampleField" />
      </m-form-section>
      <m-form-actions>
        <m-form-button :label="lk.AsyncSubmit" type="submit" />
        <m-form-button :label="lk.Reset" @click="name2 = undefined" />
      </m-form-actions>
    </m-form>
  </m-page-section>
</template>

<style lang="scss" module>
@use "sass:map";

.form {
  padding: map.get($space-md, "y") map.get($space-md, "x");
  border: 1px solid $grey-5;
}
</style>
