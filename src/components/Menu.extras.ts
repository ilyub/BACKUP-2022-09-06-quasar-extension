import type { GlobalComponent } from "./api";
import type { QMenuProps, QMenuSlots } from "quasar";

export type GlobalMenu = GlobalComponent<MenuProps, MenuSlots>;

export interface MenuOwnProps {}

export type MenuParentProps = QMenuProps;

export interface MenuProps extends MenuParentProps, MenuOwnProps {}

export type MenuSlots = QMenuSlots;
