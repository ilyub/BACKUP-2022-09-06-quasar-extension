<script lang="ts">
import { defineComponent, ref } from "vue";
import { Form } from "./Form.extras";
import { useQuasar } from "quasar";
import { wait } from "@skylib/functions";

export default defineComponent({
  name: "sample-form",
  setup: () => {
    const $q = useQuasar();

    return {
      asyncSubmit: async (): Promise<void> => {
        await wait(2000);
        $q.notify(Form.lang.Submitted);
      },
      lk: Form.lang.keys,
      name1: ref<string>(),
      name2: ref<string>(),
      submit: (): void => {
        $q.notify(Form.lang.Submitted);
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
      async-task-type="httpRequest"
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
