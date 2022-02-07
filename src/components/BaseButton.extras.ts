import type { QBtnProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type {
  PropOptions,
  PropOptionsBoolean,
  PropsToPropOptions
} from "./api";
import type { Direction } from "./Tooltip.extras";

export type BaseButtonPropOptions = PropsToPropOptions<
  QBtnProps,
  {
    readonly modelValue: PropOptionsBoolean;
    readonly tooltip: PropOptions<stringU>;
    readonly tooltipDirection: PropOptions<Direction | undefined>;
  }
>;
