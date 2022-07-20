import { defineFn, evaluate } from "@skylib/functions";
import type { Ref } from "vue";
import { handlePromise } from "@skylib/facades";
import { propFactory } from "./misc";
import { ref } from "vue";

export const asyncClick = defineFn(
  /**
   * Use async click plugin.
   *
   * @param props - Props.
   * @returns Async click plugin.
   */
  (props: asyncClick.Props): asyncClick.Plugin => {
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
    // eslint-disable-next-line @skylib/custom/no-complex-type-in-function-return -- Ok
    props: evaluate(() => {
      const prop = propFactory<asyncClick.OwnProps>();

      return {
        asyncClick: prop("asyncClick")
      } as const;
    })
  }
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace asyncClick {
  export interface AsyncClick {
    /**
     * Handles async click.
     */
    (): Promise<void>;
  }

  export interface OwnProps {
    readonly asyncClick?: AsyncClick | undefined;
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
