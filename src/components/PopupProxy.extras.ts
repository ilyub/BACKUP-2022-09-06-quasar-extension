import type { GlobalComponent, plugins } from "./api";
import type { QPopupProxyProps, QPopupProxySlots } from "quasar";

export namespace PopupProxy {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps extends plugins.useDirection.Props {}

  export interface ParentProps extends Omit<QPopupProxyProps, keyof OwnProps> {}

  export interface ParentSlots extends QPopupProxySlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}
