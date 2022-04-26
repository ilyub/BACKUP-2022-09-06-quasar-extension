import BaseButton from "./BaseButton.vue";
import Button from "./Button.vue";
import ButtonsGroup from "./ButtonsGroup.vue";
import Card from "./Card.vue";
import CardActions from "./CardActions.vue";
import CardSection from "./CardSection.vue";
import DatetimePicker from "./DatetimePicker.vue";
import Droppable from "./Droppable.vue";
import ExpansionItem from "./ExpansionItem.vue";
import Form from "./Form.vue";
import FormButton from "./FormButton.vue";
import Group from "./Group.vue";
import IconButton from "./IconButton.vue";
import IconButtonsGroup from "./IconButtonsGroup.vue";
import IconPicker from "./IconPicker.vue";
import Indent from "./Indent.vue";
import Input from "./Input.vue";
import Knob from "./Knob.vue";
import LanguagePicker from "./LanguagePicker.vue";
import ListItem from "./ListItem.vue";
import Menu from "./Menu.vue";
import NumericInput from "./NumericInput.vue";
import OptionGroup from "./OptionGroup.vue";
import PageLayout from "./PageLayout.vue";
import PageSection from "./PageSection.vue";
import Resizer from "./Resizer.vue";
import Section from "./Section.vue";
import Select from "./Select.vue";
import Sortable from "./Sortable.vue";
import Subsection from "./Subsection.vue";
import Switchable from "./Switchable.vue";
import Table from "./Table.vue";
import TimeInput from "./TimeInput.vue";
import Toggle from "./Toggle.vue";
import Tooltip from "./Tooltip.vue";
import { o } from "@skylib/functions";
import type { GlobalBaseButton } from "./BaseButton.extras";
import type { GlobalButton } from "./Button.extras";
import type { GlobalButtonsGroup } from "./ButtonsGroup.extras";
import type { GlobalCard } from "./Card.extras";
import type { GlobalCardActions } from "./CardActions.extras";
import type { GlobalCardSection } from "./CardSection.extras";
import type { GlobalDatetimePicker } from "./DatetimePicker.extras";
import type { GlobalExpansionItem } from "./ExpansionItem.extras";
import type { GlobalForm } from "./Form.extras";
import type { GlobalFormButton } from "./FormButton.extras";
import type { GlobalGroup } from "./Group.extras";
import type { GlobalIconButton } from "./IconButton.extras";
import type { GlobalIconButtonsGroup } from "./IconButtonsGroup.extras";
import type { GlobalIconPicker } from "./IconPicker.extras";
import type { GlobalIndent } from "./Indent.extras";
import type { GlobalInput } from "./Input.extras";
import type { GlobalKnob } from "./Knob.extras";
import type { GlobalLanguagePicker } from "./LanguagePicker.extras";
import type { GlobalListItem } from "./ListItem.extras";
import type { GlobalMenu } from "./Menu.extras";
import type { GlobalNumericInput } from "./NumericInput.extras";
import type { GlobalOptionGroup } from "./OptionGroup.extras";
import type { GlobalPageLayout } from "./PageLayout.extras";
import type { GlobalPageSection } from "./PageSection.extras";
import type { GlobalResizer } from "./Resizer.extras";
import type { GlobalSection } from "./Section.extras";
import type { GlobalSelect } from "./Select.extras";
import type { GlobalSortable } from "./Sortable.extras";
import type { GlobalSubsection } from "./Subsection.extras";
import type { GlobalSwitchable } from "./Switchable.extras";
import type { GlobalTable } from "./Table.extras";
import type { GlobalTimeInput } from "./TimeInput.extras";
import type { GlobalToggle } from "./Toggle.extras";
import type { GlobalTooltip } from "./Tooltip.extras";

export * as api from "./api";

export * as extras from "./extras";

export { default as BaseButton } from "./BaseButton.vue";

export { default as Button } from "./Button.vue";

export { default as ButtonsGroup } from "./ButtonsGroup.vue";

export { default as CardActions } from "./CardActions.vue";

export { default as CardSection } from "./CardSection.vue";

export { default as DatetimePicker } from "./DatetimePicker.vue";

export { default as Droppable } from "./Droppable.vue";

export { default as ExpansionItem } from "./ExpansionItem.vue";

export { default as Form } from "./Form.vue";

export { default as FormButton } from "./FormButton.vue";

export type { RootElementProp } from "./Group.extras";

export type { GroupItems } from "./Group.extras";

export { genericGroup } from "./Group.generic";

export { default as Group } from "./Group.vue";

export { default as IconButton } from "./IconButton.vue";

export { default as IconButtonsGroup } from "./IconButtonsGroup.vue";

export type { IconPickerSettings } from "./IconPicker.extras";

export { provideIconPickerSettings } from "./IconPicker.extras";

export { testIconPickerSettings } from "./IconPicker.extras";

export { default as IconPicker } from "./IconPicker.vue";

export { default as Indent } from "./Indent.vue";

export { default as Input } from "./Input.vue";

export { default as Knob } from "./Knob.vue";

export type { LanguagePickerSettings } from "./LanguagePicker.extras";

export { provideLanguagePickerSettings } from "./LanguagePicker.extras";

export { testLanguagePickerSettings } from "./LanguagePicker.extras";

export { default as LanguagePicker } from "./LanguagePicker.vue";

export { default as ListItem } from "./ListItem.vue";

export { default as Menu } from "./Menu.vue";

export { default as NumericInput } from "./NumericInput.vue";

export type { OptionGroupOptions } from "./OptionGroup.extras";

export { genericOptionGroup } from "./OptionGroup.generic";

export { default as OptionGroup } from "./OptionGroup.vue";

export type { PageLayoutSettings } from "./PageLayout.extras";

export { providePageLayoutSettings } from "./PageLayout.extras";

export { testPageLayoutSettings } from "./PageLayout.extras";

export { default as PageLayout } from "./PageLayout.vue";

export { default as PageSection } from "./PageSection.vue";

export type { ResizerSettings } from "./Resizer.extras";

export { provideResizerSettings } from "./Resizer.extras";

export { testResizerSettings } from "./Resizer.extras";

export { default as Resizer } from "./Resizer.vue";

export { default as Section } from "./Section.vue";

export type { SelectOptions } from "./Select.extras";

export { genericSelect } from "./Select.generic";

export { default as Select } from "./Select.vue";

export type { SortableSettings } from "./Sortable.extras";

export { buildElements } from "./Sortable.extras";

export { provideSortableSettings } from "./Sortable.extras";

export { testSortableSettings } from "./Sortable.extras";

export { default as Sortable } from "./Sortable.vue";

export { default as Subsection } from "./Subsection.vue";

export type { Transition } from "./Switchable.extras";

export type { SwitchableSettings } from "./Switchable.extras";

export { injectDisable } from "./Switchable.extras";

export { provideSwitchableSettings } from "./Switchable.extras";

export { testSwitchableSettings } from "./Switchable.extras";

export { default as Switchable } from "./Switchable.vue";

export { genericTab } from "./Tab.generic";

export { genericTabPanel } from "./TabPanel.generic";

export { genericTabPanels } from "./TabPanels.generic";

export type {
  Column,
  Columns,
  Pagination,
  TableOwnProps,
  TableProps
} from "./Table.extras";

export type { ColumnsOrder, ColumnWidths, HiddenColumns } from "./Table.extras";

export type { TableState } from "./Table.extras";

export type { TableSettings } from "./Table.extras";

export { isTableState } from "./Table.extras";

export { useTableState } from "./Table.extras";

export { provideTableSettings } from "./Table.extras";

export { testTableSettings } from "./Table.extras";

export { genericTable } from "./Table.generic";

export { default as Table } from "./Table.vue";

export { genericTabs } from "./Tabs.generic";

export { default as TimeInput } from "./TimeInput.vue";

export { default as Toggle } from "./Toggle.vue";

export type { Direction } from "./Tooltip.extras";

export type { TooltipSettings } from "./Tooltip.extras";

export { disabled } from "./Tooltip.extras";

export { provideTooltipSettings } from "./Tooltip.extras";

export { testTooltipSettings } from "./Tooltip.extras";

export { default as Tooltip } from "./Tooltip.vue";

export const components = o.freeze([
  BaseButton,
  Button,
  ButtonsGroup,
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
  IconButtonsGroup,
  IconPicker,
  Indent,
  Input,
  Knob,
  LanguagePicker,
  ListItem,
  Menu,
  NumericInput,
  OptionGroup,
  PageLayout,
  PageSection,
  Resizer,
  Section,
  Select,
  Sortable,
  Subsection,
  Switchable,
  Table,
  TimeInput,
  Tooltip,
  Toggle
]);

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    readonly "m-base-button": GlobalBaseButton;
    readonly "m-button": GlobalButton;
    readonly "m-buttons-group": GlobalButtonsGroup;
    readonly "m-card": GlobalCard;
    readonly "m-card-actions": GlobalCardActions;
    readonly "m-card-section": GlobalCardSection;
    readonly "m-datetime-picker": GlobalDatetimePicker;
    readonly "m-expansion-item": GlobalExpansionItem;
    readonly "m-form": GlobalForm;
    readonly "m-form-button": GlobalFormButton;
    readonly "m-group": GlobalGroup;
    readonly "m-icon-button": GlobalIconButton;
    readonly "m-icon-buttons-group": GlobalIconButtonsGroup;
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
    readonly "m-resizer": GlobalResizer;
    readonly "m-section": GlobalSection;
    readonly "m-select": GlobalSelect;
    readonly "m-sortable": GlobalSortable;
    readonly "m-subsection": GlobalSubsection;
    readonly "m-switchable": GlobalSwitchable;
    readonly "m-table": GlobalTable;
    readonly "m-time-input": GlobalTimeInput;
    readonly "m-toggle": GlobalToggle;
    readonly "m-tooltip": GlobalTooltip;
  }
}
