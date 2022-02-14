import type { QBtnProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { ExtendQuasarProps, PropOptions, PropOptionsBoolean } from "./api";
import type { Direction } from "./Tooltip.extras";

export type BaseButtonProps = ExtendQuasarProps<
  QBtnProps,
  {
    readonly modelValue: PropOptionsBoolean;
    readonly tooltip: PropOptions<stringU>;
    readonly tooltipDirection: PropOptions<Direction | undefined>;
  }
>;
