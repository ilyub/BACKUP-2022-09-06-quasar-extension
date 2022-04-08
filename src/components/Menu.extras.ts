import type { QMenuProps, QMenuSlots } from "quasar";

import type { GlobalComponent } from "./api";

export type GlobalMenu = GlobalComponent<MenuProps, MenuSlots>;

export interface MenuOwnProps {}

export type MenuParentProps = QMenuProps;

export interface MenuProps extends MenuParentProps, MenuOwnProps {}

export type MenuSlots = QMenuSlots;
