import type { QItemProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type {
  PropOptions,
  PropOptionsBoolean,
  PropOptionsRequired,
  PropsToPropOptions
} from "./api";

export type MenuItemPropOptions = PropsToPropOptions<
  QItemProps,
  {
    readonly caption: PropOptionsRequired<string>;
    readonly header: PropOptionsBoolean;
    readonly icon: PropOptions<stringU>;
  }
>;