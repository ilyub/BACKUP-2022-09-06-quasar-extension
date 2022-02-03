import type { QBtnProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { Direction } from "./XTooltip.extras";

// eslint-disable-next-line @skylib/prefer-readonly
export interface XBaseButtonProps extends QBtnProps {
  readonly modelValue?: boolean;
  readonly tooltip?: stringU;
  readonly tooltipDirection?: Direction | undefined;
}
