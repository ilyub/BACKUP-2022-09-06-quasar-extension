import { propFactory } from "./misc";
import { handlePromise } from "@skylib/facades";
import { defineFn, evaluate } from "@skylib/functions";
import { ref } from "vue";
import type { Ref } from "vue";

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
    props: evaluate(() => {
      const prop = propFactory<asyncClick.OwnProps>();

      return {
        asyncClick: prop<"asyncClick">()
      } as const;
    })
  }
);

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
