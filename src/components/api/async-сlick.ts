import { prop } from "./misc";
import { handlePromise } from "@skylib/facades";
import { defineFn } from "@skylib/functions";
import { ref } from "vue";
import type { SetupProps } from "./core";
import type { Ref } from "vue";

export const useAsyncClick = defineFn(
  /**
   * Use async click plugin.
   *
   * @param props - Props.
   * @returns Async click plugin.
   */
  (
    props: SetupProps<useAsyncClick.Props, "onAsyncClick">
  ): useAsyncClick.Plugin => {
    const active = ref(false);

    return defineFn(
      (): void => {
        const callback = props.onAsyncClick;

        if (callback)
          handlePromise.silent(async () => {
            active.value = true;

            try {
              await callback();
            } finally {
              active.value = false;
            }
          });
      },
      { active }
    );
  },
  {
    props: {
      onAsyncClick: prop<useAsyncClick.Props["onAsyncClick"]>()
    } as const
  }
);

export namespace useAsyncClick {
  export interface AsyncClick {
    /**
     * Handles async click.
     */
    (): Promise<void>;
  }

  export interface OwnProps {
    // eslint-disable-next-line @skylib/optional-property-style -- Ok
    readonly onAsyncClick?: AsyncClick | undefined;
  }

  export interface Plugin {
    /**
     * Handles click.
     */
    (): void;
    readonly active: Ref<boolean>;
  }

  export interface Props extends OwnProps {}
}
