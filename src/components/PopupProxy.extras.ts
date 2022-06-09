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

  export interface ParentProps
    extends Omit<QPopupProxyProps, keyof PluginProps> {}

  export interface ParentSlots extends QPopupProxySlots {}

  export interface PluginProps extends plugins.direction.Props {}

  export interface Props extends ParentProps, PluginProps {}

  export interface QPopupProxyProps
    extends BaseProps,
      Omit<QMenuProps, keyof BaseProps>,
      Omit<QDialogProps, keyof BaseProps> {}

  export interface QPopupProxySlots extends BaseSlots {}

  export interface Slots extends ParentSlots {}
}
