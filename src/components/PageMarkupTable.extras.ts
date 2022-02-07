import type { QMarkupTableProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { PropOptions, PropsToPropOptions } from "./api";

export type PageMarkupTablePropOptions = PropsToPropOptions<
  QMarkupTableProps,
  {
    readonly extraPageOffset: PropOptions<stringU>;
  }
>;
