import type { QMarkupTableProps } from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

import type { ExtendQuasarProps, PropOptions } from "./api";

export type PageMarkupTableProps = ExtendQuasarProps<
  QMarkupTableProps,
  {
    readonly extraPageOffset: PropOptions<stringU>;
  }
>;
