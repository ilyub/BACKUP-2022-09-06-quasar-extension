import type { QKnobProps } from "quasar";

import type {
  PropOptionsBoolean,
  PropOptionsRequired,
  PropsToPropOptions
} from "./api";

export type KnobPropOptions = PropsToPropOptions<
  QKnobProps,
  {
    readonly disable: PropOptionsBoolean;
    readonly modelValue: PropOptionsRequired<number>;
  }
>;
