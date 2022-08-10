import { defineFn, evaluate } from "@skylib/functions";
import type { ComputedRef } from "vue";
import { computed } from "vue";
import { propFactory } from "./misc";

export const direction = defineFn(
  /**
   * Use direction plugin.
   *
   * @param props - Props.
   * @returns Direction plugin.
   */
  (props: direction.Props): direction.Plugin => {
    const dir = computed(() => props.direction ?? "down-right");

    return {
      anchor: computed(() => {
        switch (dir.value) {
          case "down":
            return "bottom middle";

          case "down-left":
            return "bottom right";

          case "down-right":
            return "bottom left";

          case "left":
            return "center left";

          case "left-down":
            return "top left";

          case "left-up":
            return "bottom left";

          case "right":
            return "center right";

          case "right-down":
            return "top right";

          case "right-up":
            return "bottom right";

          case "up":
            return "top middle";

          case "up-left":
            return "top right";

          case "up-right":
            return "top left";
        }
      }),
      offset: computed(() => {
        switch (dir.value) {
          case "down":
          case "down-left":
          case "down-right":
            return [0, 5];

          case "left":
          case "left-down":
          case "left-up":
            return [5, 0];

          case "right":
          case "right-down":
          case "right-up":
            return [5, 0];

          case "up":
          case "up-left":
          case "up-right":
            return [0, 5];
        }
      }),
      self: computed(() => {
        switch (dir.value) {
          case "down":
            return "top middle";

          case "down-left":
            return "top right";

          case "down-right":
            return "top left";

          case "left":
            return "center right";

          case "left-down":
            return "top right";

          case "left-up":
            return "bottom right";

          case "right":
            return "center left";

          case "right-down":
            return "top left";

          case "right-up":
            return "bottom left";

          case "up":
            return "bottom middle";

          case "up-left":
            return "bottom right";

          case "up-right":
            return "bottom left";
        }
      }),
      transitionHide: computed(() => {
        switch (dir.value) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-up";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-right";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-left";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-down";
        }
      }),
      transitionShow: computed(() => {
        switch (dir.value) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-down";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-left";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-right";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-up";
        }
      })
    };
  },
  {
    // eslint-disable-next-line @skylib/typescript/no-complex-return-type -- Ok
    props: evaluate(() => {
      const prop = propFactory<direction.OwnProps>();

      return { direction: prop("direction") } as const;
    })
  }
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace direction {
  export type Coupling =
    // eslint-disable-next-line @skylib/typescript/prefer-enum -- Ok
    | "bottom left"
    | "bottom middle"
    | "bottom right"
    | "center left"
    | "center right"
    | "top left"
    | "top middle"
    | "top right";

  export type Direction =
    // eslint-disable-next-line @skylib/typescript/prefer-enum -- Ok
    | "down-left"
    | "down-right"
    | "down"
    | "left-down"
    | "left-up"
    | "left"
    | "right-down"
    | "right-up"
    | "right"
    | "up-left"
    | "up-right"
    | "up";

  export type Offset = readonly [number, number];

  export interface OwnProps {
    readonly direction?: Direction | undefined;
  }

  export interface Plugin {
    readonly anchor: ComputedRef<Coupling>;
    readonly offset: ComputedRef<Offset>;
    readonly self: ComputedRef<Coupling>;
    readonly transitionHide: ComputedRef<Transition>;
    readonly transitionShow: ComputedRef<Transition>;
  }

  export interface Props extends OwnProps {}

  // eslint-disable-next-line @skylib/typescript/prefer-enum -- Ok
  export type Transition = "jump-down" | "jump-left" | "jump-right" | "jump-up";
}
