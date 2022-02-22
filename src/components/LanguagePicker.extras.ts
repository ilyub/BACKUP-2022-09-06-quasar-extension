import type { GlobalComponentConstructor } from "quasar";

import type { LocaleName } from "@skylib/functions/es/types/locales";

import type { PropOptionsRequired } from "./api";
import { createInjectable } from "./api";
import type { IconButtonProps, IconButtonSlots } from "./IconButton.extras";

export interface ChangeLanguageAction {
  /**
   * Change language action.
   *
   * @param language - Language.
   */
  (language: LocaleName): void;
}

export type GlobalLanguagePicker = GlobalComponentConstructor<
  LanguagePickerProps,
  LanguagePickerSlots
>;

export interface LanguagePickerItem {
  readonly caption: string;
  readonly flag: string;
  readonly lang: LocaleName;
}

export type LanguagePickerItems = readonly LanguagePickerItem[];

export type LanguagePickerParentProps = IconButtonProps;

export interface LanguagePickerOwnProps {
  readonly language: unknown;
}

export interface LanguagePickerProps
  extends LanguagePickerParentProps,
    LanguagePickerOwnProps {}

export type LanguagePickerSlots = IconButtonSlots;

export interface LanguagePickerOptions extends IconButtonProps {
  readonly language: PropOptionsRequired<unknown>;
}

export interface LanguagePickerSettings {
  readonly changeLanguageAction: ChangeLanguageAction;
  readonly items: LanguagePickerItems;
}

export const {
  inject: injectLanguagePickerSettings,
  provide: provideLanguagePickerSettings,
  test: testLanguagePickerSettings
} = createInjectable<LanguagePickerSettings>();
