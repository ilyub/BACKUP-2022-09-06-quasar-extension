<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-form-section" });
</script>

<template>
  <m-page-section>
    <m-form :class="$style.form">
      <m-form-section>
        <m-input label="Name" />
      </m-form-section>
      <m-form-actions>
        <m-form-button label="Submit" type="submit" />
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
