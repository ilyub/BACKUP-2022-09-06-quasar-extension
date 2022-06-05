<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-form-section",
  setup: () => {
    return { name: ref<string>() };
  }
});
</script>

<template>
  <m-page-section>
    <m-form :class="$style.form">
      <m-form-section>
        <m-input v-model="name" label="Name" />
      </m-form-section>
      <m-form-actions>
        <m-form-button label="Submit" type="submit" />
        <m-form-button label="Reset" @click="name = undefined" />
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
