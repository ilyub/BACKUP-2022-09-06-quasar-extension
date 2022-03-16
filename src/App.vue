<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import * as _ from "lodash-es";
import { computed, defineComponent, ref } from "vue";
import type { DefinedComponent } from "@vue/test-utils/dist/types";

import * as o from "@skylib/functions/es/object";

import type { OptionGroupOptions } from "./components/OptionGroup.extras";
import { genericOptionGroup } from "./components/OptionGroup.generic";
import Button from "./samples/Button.vue";
import Card from "./samples/Card.vue";
import DatetimePicker from "./samples/DatetimePicker.vue";
import Droppable from "./samples/Droppable.vue";
import ExpansionItem from "./samples/ExpansionItem.vue";
import Form from "./samples/Form.vue";
import FormButton from "./samples/FormButton.vue";
import Group from "./samples/Group.vue";
import IconButton from "./samples/IconButton.vue";
import IconPicker from "./samples/IconPicker.vue";
import Indent from "./samples/Indent.vue";
import Input from "./samples/Input.vue";
import Knob from "./samples/Knob.vue";
import LanguagePicker from "./samples/LanguagePicker.vue";
import Menu from "./samples/Menu.vue";
import NumericInput from "./samples/NumericInput.vue";
import OptionGroup from "./samples/OptionGroup.vue";
import PageLayout from "./samples/PageLayout.vue";
import PageSection from "./samples/PageSection.vue";
import PageTable from "./samples/PageTable.vue";
import Resizer from "./samples/Resizer.vue";
import Section from "./samples/Section.vue";
import Select from "./samples/Select.vue";
import Sortable from "./samples/Sortable.vue";
import Subsection from "./samples/Subsection.vue";
import Switchable from "./samples/Switchable.vue";
import TimeInput from "./samples/TimeInput.vue";
import Toggle from "./samples/Toggle.vue";
import Tooltip from "./samples/Tooltip.vue";
import { useProvide } from "./samples/useProvide";

// eslint-disable-next-line @skylib/prefer-readonly
const components = {
  Button,
  Card,
  DatetimePicker,
  Droppable,
  ExpansionItem,
  Form,
  FormButton,
  Group,
  IconButton,
  IconPicker,
  Indent,
  Input,
  Knob,
  LanguagePicker,
  Menu,
  NumericInput,
  OptionGroup,
  PageLayout,
  PageSection,
  PageTable,
  Resizer,
  Section,
  Select,
  Sortable,
  Subsection,
  Switchable,
  TimeInput,
  Toggle,
  Tooltip
};

export default defineComponent({
  name: "app",
  components: {
    "m-option-group-components": genericOptionGroup<keyof typeof components>()
  },
  setup() {
    const option = ref<keyof typeof components>("Button");

    const { provide } = useProvide();

    provide();

    return {
      component: computed<DefinedComponent>(() => components[option.value]),
      option,
      options: computed<OptionGroupOptions<keyof typeof components>>(() =>
        o.entries(components).map(([index, component]) => {
          return {
            label: _.startCase(component.name).replace(/^Sample /u, ""),
            value: index
          };
        })
      )
    };
  }
});
</script>

<template>
  <div class="q-pa-lg">
    <div id="progressBar" :class="$style.progressBar"></div>
    <div class="row">
      <div>
        <m-option-group-components
          v-model="option"
          :class="$style.optionGroup"
          :options="options"
        />
      </div>
      <div :class="`${$style.component} flex-grow-1`">
        <component :is="component" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use "sass:map";

.component {
  max-width: 600px;
}

.optionGroup {
  width: 400px;
}

.optionGroup > div {
  width: 180px;
  float: left;
}

.progressBar {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: $blue-3;

  &:global(.progress-bar-active) {
    display: block;
    transition: width 100ms ease;
  }
}
</style>
