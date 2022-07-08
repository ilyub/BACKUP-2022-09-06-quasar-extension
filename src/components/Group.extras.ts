import type { GlobalComponent, VNodes, plugins } from "./api";
import type { Rec, stringU } from "@skylib/functions";
import { lang as baseLang } from "@skylib/facades";

export namespace Group {
  export const lang: baseLang.Lang<never, never> = baseLang;

  export interface Global<T extends string = string>
    extends GlobalComponent<Props<T>, Slots<T>> {}

  export interface Item<T extends string = string> {
    readonly id: T;
    readonly show: boolean;
    readonly title: baseLang.Key;
  }

  export type Items<T extends string = string> = ReadonlyArray<Item<T>>;

  export interface OwnProps<T extends string = string> {
    readonly items: Items<T>;
    readonly rootElement?: RootElement | undefined;
    readonly searchString?: stringU;
  }

  export interface PluginProps
    extends plugins.langProps.Props<"notFoundLabel"> {}

  export interface Props<T extends string = string>
    extends PluginProps,
      OwnProps<T> {}

  export type RootElement = "page-section" | "section" | "subsection";

  // eslint-disable-next-line @skylib/custom/quasar/prefer-interface -- Ok
  export type Slots<T extends string = string> = Rec<T, () => VNodes>;
}
