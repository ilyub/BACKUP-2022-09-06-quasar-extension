import type { GlobalComponent, plugins } from "./api";
import type {
  QPopupProxyProps as BaseProps,
  QPopupProxySlots as BaseSlots,
  QDialogProps,
  QMenuProps,
  QPopupProxy
} from "quasar";

export namespace PopupProxy {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QPopupProxy;
  }

  export interface OwnProps extends plugins.useDirection.Props {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<QPopupProxyProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QPopupProxySlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface QPopupProxyProps
    extends BaseProps,
      Omit<QMenuProps, keyof BaseProps>,
      Omit<QDialogProps, keyof BaseProps> {}

  export interface QPopupProxySlots extends BaseSlots {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
