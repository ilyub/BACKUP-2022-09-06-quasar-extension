declare module "*.vue" {
  import type { DefineComponent } from "vue";

  export default component;

  const component: DefineComponent<object, object, unknown>;
}
