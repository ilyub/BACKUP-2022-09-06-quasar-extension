import { prop } from "./misc";
import { lang } from "@skylib/facades";
import { defineFn, is } from "@skylib/functions";
import { computed } from "vue";
import type { SetupProps } from "./core";
import type { stringU } from "@skylib/functions";
import type { ComputedRef } from "vue";

export const useLabel = defineFn(
  /**
   * Use label plugin.
   *
   * @param props - Props.
   * @returns Label plugin.
   */
  (props: SetupProps<useLabel.Props>): ComputedRef<stringU> =>
    computed(() =>
      is.not.empty(props.label) ? lang.get(props.label) : undefined
    ),
  {
    props: {
      label: prop<useLabel.Props["label"]>()
    } as const
  }
);

export namespace useLabel {
  export interface OwnProps {
    readonly label?: lang.Transform<lang.Word> | undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentProps {}

  export interface Props extends ParentProps, OwnProps {}
}
