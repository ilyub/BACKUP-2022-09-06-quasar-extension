import { components, Index } from "./samples";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaws = [
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

type RouteRecordRaws = readonly RouteRecordRaw[];
