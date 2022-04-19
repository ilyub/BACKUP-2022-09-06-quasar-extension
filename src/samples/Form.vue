<script lang="ts">
import { wait } from "@skylib/functions";
import type { stringU } from "@skylib/functions";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-form",
  setup() {
    const name = ref<stringU>(undefined);

    return {
      name,
      submit(): void {
        name.value = undefined;
      },
      async submitAsync(): Promise<void> {
        await wait(1000);
        name.value = undefined;
      }
    };
  }
});
</script>

<template>
  <m-section>
    <m-form
      async-task-type="httpRequest"
      :class="$style.form"
      @submit-async="submitAsync"
    >
      <m-section>
        <m-input v-model="name" label="Name" />
      </m-section>
      <m-section class="justify-end row">
        <m-form-button label="Submit" type="submit" />
      </m-section>
    </m-form>
  </m-section>
  <m-section>
    <m-form :class="$style.form" @submit="submit">
      <m-section>
        <m-input v-model="name" label="Name" />
      </m-section>
      <m-section class="justify-end row">
        <m-form-button label="Submit" type="submit" />
      </m-section>
    </m-form>
  </m-section>
</template>

<style lang="scss" module>
@use "sass:map";

.form {
  padding: map.get($space-md, "y") map.get($space-md, "x");
  border: 1px solid $grey-5;
}
</style>
