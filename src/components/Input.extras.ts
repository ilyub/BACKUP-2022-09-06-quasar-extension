import type { QInputProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { ExtendQuasarProps, PropOptionsRequired } from "./api";

export type InputProps = ExtendQuasarProps<
  QInputProps,
  {
    readonly modelValue: PropOptionsRequired<stringU>;
  }
>;
