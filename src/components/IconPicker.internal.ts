import type { lang } from "@skylib/facades";

export interface Button {
  readonly icon?: string;
  readonly placeholder: boolean;
  readonly selected: boolean;
  readonly tooltip?: lang.Key;
}

export type Buttons = readonly Button[];

export interface Item {
  readonly description: string;
  readonly id: keyof Mdi;
}

export type Mdi = typeof import("@mdi/js-dynamic");
