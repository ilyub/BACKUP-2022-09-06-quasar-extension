<script lang="ts">
import * as _ from "lodash-es";
import { computed, defineComponent } from "vue";

import Button from "./Button.vue";
import Card from "./Card.vue";
import DatetimePicker from "./DatetimePicker.vue";
import Droppable from "./Droppable.vue";
import FormButton from "./FormButton.vue";
import Group from "./Group.vue";
import IconButton from "./IconButton.vue";
import IconPicker from "./IconPicker.vue";
import Input from "./Input.vue";
import Knob from "./Knob.vue";
import LanguagePicker from "./LanguagePicker.vue";
import Menu from "./Menu.vue";
import NumericInput from "./NumericInput.vue";
import OptionGroup from "./OptionGroup.vue";
import PageLayout from "./PageLayout.vue";
import PageMarkupTable from "./PageMarkupTable.vue";
import PageSection from "./PageSection.vue";
import PageTable from "./PageTable.vue";
import Resizer from "./Resizer.vue";
import Section from "./Section.vue";
import Select from "./Select.vue";
import Sortable from "./Sortable.vue";
import Switchable from "./Switchable.vue";
import Toggle from "./Toggle.vue";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "all-samples",
  setup() {
    return {
      // eslint-disable-next-line @skylib/disallow-by-regexp
      components: computed(() =>
        [
          Button,
          Card,
          DatetimePicker,
          Droppable,
          FormButton,
          Group,
          IconButton,
          IconPicker,
          Input,
          Knob,
          LanguagePicker,
          Menu,
          NumericInput,
          OptionGroup,
          PageLayout,
          PageMarkupTable,
          PageSection,
          PageTable,
          Resizer,
          Section,
          Select,
          Sortable,
          Switchable,
          Toggle,
          Tooltip
        ].map(component => [component, _.startCase(component.name)])
      )
    };
  }
});
</script>

<template>
  <table class="border-collapse">
    <tr v-for="([component, name], index) in components" :key="index">
      <td class="cell">{{ name }}</td>
      <td class="cell"><component :is="component" /></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use "sass:map";

.cell {
  padding: map.get($space-lg, "y") map.get($space-lg, "x");
  vertical-align: top;
  border: 1px solid black;
}
</style>
