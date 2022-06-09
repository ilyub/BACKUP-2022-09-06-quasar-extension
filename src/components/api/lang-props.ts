import { prop } from "./misc";
import { lang } from "@skylib/facades";
import { defineFn, is, o } from "@skylib/functions";
import { computed } from "vue";
import type { PropOptions } from "./core";
import type { Entry, stringU } from "@skylib/functions";
import type { ComputedRef } from "vue";

export const useLangProps = defineFn(
  /**
   * Use lang props plugin.
   *
   * @param props - Props.
   * @param names - Property names.
   * @returns Lang props plugin.
   */
  <T extends string>(props: useLangProps.Props<T>, ...names: T[]) => {
    const result: Array<Entry<PropertyKey, unknown>> = [];

    for (const name of names)
      result.push(
        [
          name,
          computed(() => {
            const value = props[name];

            return is.not.empty(value) ? lang.get(value) : undefined;
          })
        ],
        [`${name}Key`, computed(() => props[name])]
      );

    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return o.fromEntries(result) as useLangProps.Plugin<T>;
  },
  {
    /**
     * Creates Vue properties.
     *
     * @param names - Property names.
     * @returns Vue properties.
     */
    props: <T extends string>(...names: T[]) =>
      // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
      o.fromEntries(
        names.map(name => [name, prop()])
      ) as useLangProps.PropOptionsRecord<T>
  }
);

export namespace useLangProps {
  export type OwnProps<T extends string> = {
    readonly [K in T]?: lang.Transform<lang.Word> | undefined;
  };

  export type Plugin<T extends string> = {
    readonly [K in `${T}Key`]: ComputedRef<stringU>;
  } & {
    readonly [K in T]: ComputedRef<stringU>;
  };

  export type PropOptionsRecord<T extends string> = {
    readonly [K in T]: PropOptions<lang.Transform<lang.Word> | undefined>;
  };

  // eslint-disable-next-line no-restricted-syntax -- Ok
  export type Props<T extends string> = OwnProps<T>;
}
