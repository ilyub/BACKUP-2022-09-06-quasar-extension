import type { ComputedInjectionKey } from "./api";

export type InjectPageTableSettings = ComputedInjectionKey<PageTableSettings>;

export interface PageTableSettings {
  readonly growPageBy: number;
}

export const injectPageTableSettings: InjectPageTableSettings =
  Symbol("PageTableSettings");

/**
 * Returns default settings.
 *
 * @returns Default settings.
 */
export function defaultPageTableSettings(): PageTableSettings {
  return { growPageBy: 10 };
}
