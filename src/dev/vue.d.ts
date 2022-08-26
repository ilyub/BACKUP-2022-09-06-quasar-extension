declare module "*.vue" {
  import type { DefineComponent } from "vue";

  // eslint-disable-next-line @skylib/typescript/no-complex-declarator-type -- Ok
  export default component;

  const component: DefineComponent<object, object, unknown>;
}
