import type { numberU } from "@skylib/functions/es/types/core";

import type { PropOptions, PropOptionsRequired } from "./api";

export interface ResizerPropOptions {
  readonly max: PropOptions<numberU>;
  readonly min: PropOptionsRequired<number>;
  readonly modelValue: PropOptionsRequired<number>;
}
