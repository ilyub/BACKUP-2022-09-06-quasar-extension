import type { Component } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import type { ReadonlyRecord } from "@skylib/functions/es/types/core";

// eslint-disable-next-line import/no-unassigned-import
import "./Group.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./IconPicker.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./Input.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./LanguagePicker.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./PageLayout.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./Select.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./Sortable.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./Tooltip.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./PageTable.extras";
import DatetimePicker from "./DatetimePicker.vue";
import Droppable from "./Droppable.vue";
import Group from "./Group.vue";
import IconPicker from "./IconPicker.vue";
import Input from "./Input.vue";
import Knob from "./Knob.vue";
import LanguagePicker from "./LanguagePicker.vue";
import Menu from "./Menu.vue";
import MenuItem from "./MenuItem.vue";
import NavButton from "./NavButton.vue";
import PageLayout from "./PageLayout.vue";
import PageMarkupTable from "./PageMarkupTable.vue";
import PageTable from "./PageTable.vue";
import Resizer from "./Resizer.vue";
import Select from "./Select.vue";
import Sortable from "./Sortable.vue";
import Tooltip from "./Tooltip.vue";

// eslint-disable-next-line @skylib/prefer-readonly
export const components: ReadonlyRecord<string, Component> = {
  "s-datetime-picker": DatetimePicker,
  "s-droppable": Droppable,
  "s-group": Group,
  "s-icon-picker": IconPicker,
  "s-input": Input,
  "s-knob": Knob,
  "s-language-picker": LanguagePicker,
  "s-menu": Menu,
  "s-menu-item": MenuItem,
  "s-nav-button": NavButton,
  "s-page-layout": PageLayout,
  "s-page-markup-table": PageMarkupTable,
  "s-page-table": PageTable,
  "s-resizer": Resizer,
  "s-select": Select,
  "s-sortable": Sortable,
  "s-tooltip": Tooltip
};

for (const [name, component] of Object.entries(components))
  assert.toBeTrue(name === component.name);
