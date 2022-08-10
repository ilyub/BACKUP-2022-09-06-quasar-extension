import type { ComputedRef } from "vue";
import type { ValidationRule } from "quasar";
import { lang as baseLang } from "@skylib/facades";
import type { empty } from "@skylib/functions";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends PluginWord {}
    }
  }
}

export enum Context {
  change = "change",
  input = "input",
  submit = "submit"
}

export const lang: baseLang.Lang<keyof PluginWord, never> = baseLang;

export interface Options<T = unknown> {
  /**
   * Formats value for validation.
   *
   * @param value - Value.
   * @returns Formatted value.
   */
  readonly format: (value: unknown) => T;
  readonly label?: baseLang.Key;
  readonly max?: T;
  readonly maxErrorMessage?: baseLang.Key;
  readonly min?: T;
  readonly minErrorMessage?: baseLang.Key;
  /**
   * Formats min/max value.
   *
   * @param value - Value.
   * @returns Formatted value.l.
   */
  readonly minMaxFormat?: (value: Exclude<T, empty>) => string;
  readonly required?: boolean;
  readonly requiredErrorMessage?: baseLang.Key;
}

export interface OwnProps<T = unknown> {
  readonly rulesOnChange?: Rules<T> | undefined;
  readonly rulesOnInput?: Rules<T> | undefined;
  readonly rulesOnSubmit?: Rules<T> | undefined;
}

export interface Plugin<T = unknown> {
  readonly rules: ComputedRef<ValidationRules>;
  /**
   * Validates field.
   *
   * @param value - Value.
   * @param context - Context.
   */
  readonly validate: (value: T, context: Context) => void;
  /**
   * Validates field.
   *
   * @param value - Value.
   * @param context - Context.
   * @returns Promise.
   */
  readonly validateAsync: (value: T, context: Context) => Promise<boolean>;
}

export interface PluginWord {
  readonly Equal: true;
  readonly Field: true;
  readonly FieldIsRequired: true;
  // eslint-disable-next-line @skylib/max-identifier-blocks -- Ok
  readonly FieldShouldBeGteMin: true;
  // eslint-disable-next-line @skylib/max-identifier-blocks -- Ok
  readonly FieldShouldBeLteMax: true;
}

export interface Props<T = unknown> extends OwnProps<T> {}

export interface Rule<T = unknown> {
  /**
   * Validates value.
   *
   * @param value - Value.
   * @returns Validation result.
   */
  (value: T): baseLang.Key | Promise<baseLang.Key | true> | true;
}

export type Rules<T = unknown> = ReadonlyArray<Rule<T>>;

export type ValidationRules<T = unknown> = ReadonlyArray<ValidationRule<T>>;
