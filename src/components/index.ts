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
import Droppable from "./Droppable.vue";
import Group from "./Group.vue";
import IconPicker from "./IconPicker.vue";
import Input from "./Input.vue";
import Knob from "./Knob.vue";
import LanguagePicker from "./LanguagePicker.vue";
import MenuItem from "./MenuItem.vue";
import NavButton from "./NavButton.vue";
import PageLayout from "./PageLayout.vue";
import Resizer from "./Resizer.vue";
import Select from "./Select.vue";
import Sortable from "./Sortable.vue";
import Tooltip from "./Tooltip.vue";

// eslint-disable-next-line @skylib/prefer-readonly
export const components: ReadonlyRecord<string, Component> = {
  "x-droppable": Droppable,
  "x-group": Group,
  "x-icon-picker": IconPicker,
  "x-input": Input,
  "x-knob": Knob,
  "x-language-picker": LanguagePicker,
  "x-menu-item": MenuItem,
  "x-nav-button": NavButton,
  "x-page-layout": PageLayout,
  "x-resizer": Resizer,
  "x-select": Select,
  "x-sortable": Sortable,
  "x-tooltip": Tooltip
};

for (const [name, component] of Object.entries(components))
  assert.toBeTrue(name === component.name);
