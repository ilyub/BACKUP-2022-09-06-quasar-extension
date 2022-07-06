import { prop } from "./misc";
import { lang } from "@skylib/facades";
import { defineFn, is, o } from "@skylib/functions";
import { computed } from "vue";
import type { PropOptions } from "./types";
import type { Entry, stringU } from "@skylib/functions";
import type { ComputedRef } from "vue";

export const langProps = defineFn(
  /**
   * Use lang props plugin.
   *
   * @param props - Props.
   * @param names - Property names.
   * @returns Lang props plugin.
   */
  <T extends string>(props: langProps.Props<T>, ...names: readonly T[]) => {
    const result: Array<Entry<PropertyKey, unknown>> = [];

    for (const name of names)
      result.push(
        [
          name,
          computed(() => {
            const value: lang.Key | undefined = props[name];

            return is.not.empty(value) ? lang.get(value) : undefined;
          })
        ],
        [`${name}Key`, computed(() => props[name])]
      );

    return o.fromEntries(result) as langProps.Plugin<T>;
  },
  {
    /**
     * Creates Vue properties.
     *
     * @param names - Property names.
     * @returns Vue properties.
     */
    props: <T extends string>(...names: readonly T[]) =>
      o.fromEntries(
        names.map(name => [name, prop<lang.Key | undefined>()])
      ) as langProps.PropOptionsRecord<T>
  }
);

export namespace langProps {
  export type OwnProps<T extends string> = {
    readonly [K in T]?: lang.Key | undefined;
  };

  export type Plugin<T extends string> = {
    readonly [K in `${T}Key`]: ComputedRef<lang.Key | undefined>;
  } & {
    readonly [K in T]: ComputedRef<stringU>;
  };

  export type PropOptionsRecord<T extends string> = {
    readonly [K in T]: PropOptions<lang.Key | undefined>;
  };

  // eslint-disable-next-line @skylib/custom/quasar/prefer-interface -- Ok
  export type Props<T extends string> = OwnProps<T>;
}
