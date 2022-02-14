import type { QKnobProps } from "quasar";

import type {
  ExtendQuasarProps,
  PropOptionsBoolean,
  PropOptionsRequired
} from "./api";

export type KnobProps = ExtendQuasarProps<
  QKnobProps,
  {
    readonly disable: PropOptionsBoolean;
    readonly inline: PropOptionsBoolean;
    readonly modelValue: PropOptionsRequired<number>;
  }
>;
