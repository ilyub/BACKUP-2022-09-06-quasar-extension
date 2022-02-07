import type { QInputProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { PropOptionsRequired, PropsToPropOptions } from "./api";

export type InputPropOptions = PropsToPropOptions<
  QInputProps,
  {
    readonly modelValue: PropOptionsRequired<stringU>;
  }
>;
