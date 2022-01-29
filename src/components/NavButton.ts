import type { QBtnProps } from "quasar";

import type { Direction } from "./Tooltip.extras";

// eslint-disable-next-line @skylib/prefer-readonly
export interface NavButtonProps extends QBtnProps {
  readonly modelValue?: boolean;
  readonly tooltip?: string;
  readonly tooltipDirection?: Direction;
}
