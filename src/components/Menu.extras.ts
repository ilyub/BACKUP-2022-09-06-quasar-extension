import type {
  GlobalComponentConstructor,
  QMenuProps,
  QMenuSlots
} from "quasar";

export type GlobalMenu = GlobalComponentConstructor<MenuProps, MenuSlots>;

export type MenuParentProps = QMenuProps;

export interface MenuOwnProps {}

// eslint-disable-next-line @skylib/prefer-readonly
export interface MenuProps extends MenuParentProps, MenuOwnProps {}

export type MenuSlots = QMenuSlots;
