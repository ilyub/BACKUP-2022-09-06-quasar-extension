<script lang="ts">
import { wait } from "@skylib/functions";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-form",
  setup: () => {
    const name = ref<string>();

    return {
      name,
      submit: (): void => {
        name.value = undefined;
      },
      submitAsync: async (): Promise<void> => {
        await wait(3000);
        name.value = undefined;
      }
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-form :class="$style.form" @submit="submit">
      <m-form-section>
        <m-input v-model="name" label="Name" />
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
        <m-input v-model="name" label="Name" />
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
