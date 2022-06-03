import type { GlobalComponent, plugins } from "./api";
import type { QPopupProxy, QPopupProxyProps, QPopupProxySlots } from "quasar";

export namespace PopupProxy {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QPopupProxy;
  }

  export interface ParentProps
    extends QPopupProxyProps,
      plugins.useDirection.Props {}

  export interface ParentSlots extends QPopupProxySlots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
