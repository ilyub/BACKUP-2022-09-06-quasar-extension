declare module "*.vue" {
  import type { DefineComponent } from "vue";

  // eslint-disable-next-line @skylib/prefer-readonly
  const component: DefineComponent<object, object, unknown>;

  export default component;
}
