<script lang="ts">
import { wait } from "@skylib/functions";
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-form",
  setup: () => {
    const $q = useQuasar();

    return {
      name1: ref<string>(),
      name2: ref<string>(),
      submit: (): void => {
        $q.notify("Submit");
      },
      submitAsync: async (): Promise<void> => {
        await wait(2000);
        $q.notify("Async submit");
      }
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-form :class="$style.form" @submit="submit">
      <m-form-section>
        <m-input v-model="name1" label="Name" />
      </m-form-section>
      <m-form-actions>
        <m-form-button label="Submit" type="submit" />
      </m-form-actions>
    </m-form>
  </m-page-section>
  <m-page-section>
    <m-form
      async-task-type="httpRequest"
      :class="$style.form"
      @submit-async="submitAsync"
    >
      <m-form-section>
        <m-input v-model="name2" label="Name" />
      </m-form-section>
      <m-form-actions>
        <m-form-button label="Async submit" type="submit" />
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
