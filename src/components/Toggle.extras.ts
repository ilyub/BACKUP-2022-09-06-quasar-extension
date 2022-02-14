import type { QToggleProps } from "quasar";

import type {
  ExtendQuasarProps,
  PropOptionsBoolean,
  PropOptionsRequired
} from "./api";

export type ToggleProps = ExtendQuasarProps<
  QToggleProps,
  {
    readonly disable: PropOptionsBoolean;
    readonly modelValue: PropOptionsRequired<boolean>;
  }
>;
