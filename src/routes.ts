import type { RouteRecordRaw } from "vue-router";
import { components, Index } from "./samples";

export const routes: readonly RouteRecordRaw[] = [
  { component: Index, path: "/" },
  ...components.map(component => {
    return {
      component,
      name: component.name,
      path: `/${component.name}`
    };
  }),
  {
    path: "/:catchAll(.*)",
    redirect(): string {
      return "/";
    }
  }
];
