import type { GlobalComponent, plugins } from "./api";
import type { QMenu, QMenuProps, QMenuSlots } from "quasar";
import type { booleanU } from "@skylib/functions";
import { fn } from "@skylib/functions";
import { injectable } from "./api";

export namespace Menu {
  export const defaultExposeDown: ExposeDown = { autoClose: fn.noop };

  export const {
    inject: injectMenu,
    provide: provideMenu,
    testProvide: testProvideMenu
  } = injectable(defaultExposeDown);

  export interface ExposeDown {
    /**
     * Auto-closes menu.
     */
    readonly autoClose: () => void;
  }

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QMenu;
  }

  export interface OwnProps {
    readonly autoClose?: booleanU;
  }

  export interface ParentProps
    extends Omit<QMenuProps, keyof OwnProps | keyof PluginProps> {}

  export interface ParentSlots extends QMenuSlots {}

  export interface PluginProps extends plugins.direction.Props {}

  export interface Props extends ParentProps, PluginProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
