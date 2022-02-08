import type { QToggleProps } from "quasar";

import type {
  PropOptionsBoolean,
  PropOptionsRequired,
  PropsToPropOptions
} from "./api";

export type TogglePropOptions = PropsToPropOptions<
  QToggleProps,
  {
    readonly disable: PropOptionsBoolean;
    readonly modelValue: PropOptionsRequired<boolean>;
  }
>;
