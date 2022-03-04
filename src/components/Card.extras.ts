import type { QCardProps } from "quasar";
import type { VNode } from "vue";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { booleanU, stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade extends ModuleIcons {}
    }
  }
}

export interface ModuleIcons {
  readonly close: string;
}

export type CardParentProps = QCardProps;

export interface CardOwnProps {
  readonly minWidth?: stringU;
  readonly title?: stringU;
  readonly transparentHeader?: booleanU;
}

export interface CardProps extends CardParentProps, CardOwnProps {}

export interface CardSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly "default": () => readonly VNode[];
  /**
   * Header actions.
   *
   * @returns Node.
   */
  readonly "header-actions": () => readonly VNode[];
  /**
   * Title slot.
   *
   * @returns Node.
   */
  readonly "title": () => readonly VNode[];
}

export type GlobalCard = GlobalComponent<CardProps, CardSlots>;

export const icons: Icons<keyof ModuleIcons> = baseIcons;
