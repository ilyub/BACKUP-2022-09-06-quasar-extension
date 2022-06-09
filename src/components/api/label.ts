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
  (props: SetupProps<useLabel.Props>): useLabel.Plugin => {
    return {
      label: computed(() =>
        is.not.empty(props.label) ? lang.get(props.label) : undefined
      ),
      labelKey: computed(() => props.label)
    };
  },
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

  export interface Plugin {
    readonly label: ComputedRef<stringU>;
    readonly labelKey: ComputedRef<lang.Transform<lang.Word> | undefined>;
  }

  export interface Props extends OwnProps {}
}
