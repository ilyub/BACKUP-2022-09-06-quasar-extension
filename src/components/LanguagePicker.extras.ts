import type { LocaleName } from "@skylib/functions/es/types/locales";

import type { ComputedInjectionKey } from "./api";

export type ChangeLanguageAction = (language: LocaleName) => void;

export type InjectLanguagePickerSettings =
  ComputedInjectionKey<LanguagePickerSettings>;

export interface LanguagePickerItem {
  readonly caption: string;
  readonly flag: string;
  readonly lang: LocaleName;
}

export type LanguagePickerItems = readonly LanguagePickerItem[];

export interface LanguagePickerSettings {
  readonly changeLanguageAction: ChangeLanguageAction;
  readonly items: LanguagePickerItems;
}

export const injectLanguagePickerSettings: InjectLanguagePickerSettings =
  Symbol("LanguagePickerSettings");
