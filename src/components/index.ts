import * as o from "@skylib/functions/es/object";

import type { GlobalBaseButton } from "./BaseButton.extras";
import BaseButton from "./BaseButton.vue";
import type { GlobalButton } from "./Button.extras";
import Button from "./Button.vue";
import type { GlobalCard } from "./Card.extras";
import Card from "./Card.vue";
import type { GlobalCardActions } from "./CardActions.extras";
import CardActions from "./CardActions.vue";
import type { GlobalCardSection } from "./CardSection.extras";
import CardSection from "./CardSection.vue";
import type { GlobalDatetimePicker } from "./DatetimePicker.extras";
import DatetimePicker from "./DatetimePicker.vue";
import Droppable from "./Droppable.vue";
import type { GlobalExpansionItem } from "./ExpansionItem.extras";
import ExpansionItem from "./ExpansionItem.vue";
import type { GlobalForm } from "./Form.extras";
import Form from "./Form.vue";
import type { GlobalFormButton } from "./FormButton.extras";
import FormButton from "./FormButton.vue";
import type { GlobalGroup } from "./Group.extras";
import Group from "./Group.vue";
import type { GlobalIconButton } from "./IconButton.extras";
import IconButton from "./IconButton.vue";
import type { GlobalIconPicker } from "./IconPicker.extras";
import IconPicker from "./IconPicker.vue";
import type { GlobalIndent } from "./Indent.extras";
import Indent from "./Indent.vue";
import type { GlobalInput } from "./Input.extras";
import Input from "./Input.vue";
import type { GlobalKnob } from "./Knob.extras";
import Knob from "./Knob.vue";
import type { GlobalLanguagePicker } from "./LanguagePicker.extras";
import LanguagePicker from "./LanguagePicker.vue";
import type { GlobalListItem } from "./ListItem.extras";
import ListItem from "./ListItem.vue";
import type { GlobalMenu } from "./Menu.extras";
import Menu from "./Menu.vue";
import type { GlobalNumericInput } from "./NumericInput.extras";
import NumericInput from "./NumericInput.vue";
import type { GlobalOptionGroup } from "./OptionGroup.extras";
import OptionGroup from "./OptionGroup.vue";
import type { GlobalPageLayout } from "./PageLayout.extras";
import PageLayout from "./PageLayout.vue";
import type { GlobalPageSection } from "./PageSection.extras";
import PageSection from "./PageSection.vue";
import type { GlobalPageTable } from "./PageTable.extras";
import PageTable from "./PageTable.vue";
import type { GlobalResizer } from "./Resizer.extras";
import Resizer from "./Resizer.vue";
import type { GlobalSection } from "./Section.extras";
import Section from "./Section.vue";
import type { GlobalSelect } from "./Select.extras";
import Select from "./Select.vue";
import type { GlobalSortable } from "./Sortable.extras";
import Sortable from "./Sortable.vue";
import type { GlobalSubsection } from "./Subsection.extras";
import Subsection from "./Subsection.vue";
import type { GlobalSwitchable } from "./Switchable.extras";
import Switchable from "./Switchable.vue";
import type { GlobalTimeInput } from "./TimeInput.extras";
import TimeInput from "./TimeInput.vue";
import type { GlobalToggle } from "./Toggle.extras";
import Toggle from "./Toggle.vue";
import type { GlobalTooltip } from "./Tooltip.extras";
import Tooltip from "./Tooltip.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    readonly "m-base-button": GlobalBaseButton;
    readonly "m-button": GlobalButton;
    readonly "m-card": GlobalCard;
    readonly "m-card-actions": GlobalCardActions;
    readonly "m-card-section": GlobalCardSection;
    readonly "m-datetime-picker": GlobalDatetimePicker;
    readonly "m-expansion-item": GlobalExpansionItem;
    readonly "m-form": GlobalForm;
    readonly "m-form-button": GlobalFormButton;
    readonly "m-group": GlobalGroup;
    readonly "m-icon-button": GlobalIconButton;
    readonly "m-icon-picker": GlobalIconPicker;
    readonly "m-indent": GlobalIndent;
    readonly "m-input": GlobalInput;
    readonly "m-knob": GlobalKnob;
    readonly "m-language-picker": GlobalLanguagePicker;
    readonly "m-list-item": GlobalListItem;
    readonly "m-menu": GlobalMenu;
    readonly "m-numeric-input": GlobalNumericInput;
    readonly "m-option-group": GlobalOptionGroup;
    readonly "m-page-layout": GlobalPageLayout;
    readonly "m-page-section": GlobalPageSection;
    readonly "m-page-table": GlobalPageTable;
    readonly "m-resizer": GlobalResizer;
    readonly "m-section": GlobalSection;
    readonly "m-select": GlobalSelect;
    readonly "m-sortable": GlobalSortable;
    readonly "m-subsection": GlobalSubsection;
    readonly "m-switchable": GlobalSwitchable;
    readonly "m-time-input": GlobalTimeInput;
    readonly "m-toggle": GlobalToggle;
    readonly "m-tooltip": GlobalTooltip;
  }
}

export const components = o.freeze([
  BaseButton,
  Button,
  Card,
  CardActions,
  CardSection,
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
  ListItem,
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
  Tooltip,
  Toggle
]);
