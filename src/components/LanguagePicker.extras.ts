import type { LocaleName } from "@skylib/functions/es/types/locales";

import type { ExtendPropOptions, PropOptionsRequired } from "./api";
import { createInjectable } from "./api";
import type { IconButtonPropOptions } from "./IconButton.extras";

export type ChangeLanguageAction = (language: LocaleName) => void;

export interface LanguagePickerItem {
  readonly caption: string;
  readonly flag: string;
  readonly lang: LocaleName;
}

export type LanguagePickerItems = readonly LanguagePickerItem[];

export type LanguagePickerOptions = ExtendPropOptions<
  IconButtonPropOptions,
  {
    readonly language: PropOptionsRequired<unknown>;
  }
>;

export interface LanguagePickerSettings {
  readonly changeLanguageAction: ChangeLanguageAction;
  readonly items: LanguagePickerItems;
}

export const {
  inject: injectLanguagePickerSettings,
  provide: provideLanguagePickerSettings,
  test: testLanguagePickerSettings
} = createInjectable<LanguagePickerSettings>();
