import type { GlobalComponent, plugins } from "./api";
import type {
  QDialogProps,
  QMenuProps,
  QPopupProxy,
  QPopupProxyProps as BaseProps,
  QPopupProxySlots as BaseSlots
} from "quasar";

export namespace PopupProxy {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QPopupProxy;
  }

  export interface ParentProps
    extends QPopupProxyProps,
      plugins.useDirection.Props {}

  export interface ParentSlots extends QPopupProxySlots {}

  export interface Props extends ParentProps {}

  export interface QPopupProxyProps
    extends BaseProps,
      Omit<QMenuProps, keyof BaseProps>,
      Omit<QDialogProps, keyof BaseProps> {}

  export interface QPopupProxySlots extends BaseSlots {}

  export interface Slots extends ParentSlots {}
}
