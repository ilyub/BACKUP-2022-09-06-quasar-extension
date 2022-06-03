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
  (props: SetupProps<useAsyncClick.Props>): useAsyncClick.Plugin => {
    const active = ref(false);

    return defineFn(
      (): void => {
        const callback = props.asyncClick;

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
      asyncClick: prop<useAsyncClick.Props["asyncClick"]>()
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
    readonly asyncClick?: AsyncClick | undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentProps {}

  export interface Plugin {
    /**
     * Handles click.
     */
    (): void;
    readonly active: Ref<boolean>;
  }

  export interface Props extends ParentProps, OwnProps {}
}
