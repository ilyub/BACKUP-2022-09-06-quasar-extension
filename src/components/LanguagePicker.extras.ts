import type { LocaleName } from "@skylib/functions/es/types/configurable";

import type { GlobalComponent, PropOptionsRequired } from "./api";
import { createInjectable } from "./api";
import type { IconButtonProps, IconButtonSlots } from "./IconButton.extras";

export const {
  inject: injectLanguagePickerSettings,
  provide: provideLanguagePickerSettings,
  test: testLanguagePickerSettings
} = createInjectable<LanguagePickerSettings>();

export interface ChangeLanguageAction {
  /**
   * Change language action.
   *
   * @param language - Language.
   */
  (language: LocaleName): void;
}

export type GlobalLanguagePicker = GlobalComponent<
  LanguagePickerProps,
  LanguagePickerSlots
>;

export interface LanguagePickerItem {
  readonly caption: string;
  readonly flag: string;
  readonly lang: LocaleName;
}

export type LanguagePickerItems = readonly LanguagePickerItem[];

export interface LanguagePickerOptions extends IconButtonProps {
  readonly language: PropOptionsRequired<unknown>;
}

export interface LanguagePickerOwnProps {
  readonly language: unknown;
}

export type LanguagePickerParentProps = IconButtonProps;

export interface LanguagePickerProps
  extends LanguagePickerParentProps,
    LanguagePickerOwnProps {}

export interface LanguagePickerSettings {
  readonly changeLanguageAction: ChangeLanguageAction;
  readonly items: LanguagePickerItems;
}

export type LanguagePickerSlots = IconButtonSlots;
