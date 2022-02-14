import type { QItemProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { ExtendQuasarProps, PropOptions } from "./api";

export type ListItemProps = ExtendQuasarProps<
  QItemProps,
  {
    readonly caption: PropOptions<stringU>;
    readonly icon: PropOptions<stringU>;
  }
>;
