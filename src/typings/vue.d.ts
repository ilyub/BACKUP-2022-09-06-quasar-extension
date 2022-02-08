declare module "*.vue" {
  import type * as is from "@skylib/functions/es/guards";

  import type { DefineComponent } from "vue";

  // eslint-disable-next-line @skylib/prefer-readonly
  const component: DefineComponent<object, object, unknown>;

  // eslint-disable-next-line import/no-default-export
  export default component;

  /**
   * Creates component.
   *
   * @param guard - Guard for type T.
   * @returns Component.
   */
  export function PageTableFactory<T>(
    guard: is.Guard<T>
  ): DefineComponent<object, object, unknown>;
}
