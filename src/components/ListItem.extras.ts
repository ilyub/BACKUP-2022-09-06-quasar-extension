import type { QItemProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { PropOptions, PropsToPropOptions } from "./api";

export type ListItemPropOptions = PropsToPropOptions<
  QItemProps,
  {
    readonly caption: PropOptions<stringU>;
    readonly icon: PropOptions<stringU>;
  }
>;
