import { icons as baseIcons } from "@skylib/facades";
import type { GlobalComponent, VNodes } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
import type { QCardProps } from "quasar";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }
  }
}

export const icons: baseIcons.Icons<keyof ModuleIcons> = baseIcons;

export interface CardOwnProps {
  readonly minWidth?: stringU;
  readonly title?: stringU;
  readonly transparentHeader?: booleanU;
}

export type CardParentProps = QCardProps;

export interface CardProps extends CardParentProps, CardOwnProps {}

export interface CardSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly "default": () => VNodes;
  /**
   * Header actions.
   *
   * @returns Node.
   */
  readonly "header-actions": () => VNodes;
  /**
   * Title slot.
   *
   * @returns Node.
   */
  readonly "title": () => VNodes;
}

export type GlobalCard = GlobalComponent<CardProps, CardSlots>;

export interface ModuleIcons {
  readonly close: true;
}
