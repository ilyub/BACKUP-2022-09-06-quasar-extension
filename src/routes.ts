import { Overview, components } from "./samples";
import { o } from "@skylib/functions";
import type { RouteRecordRaw } from "vue-router";

export const routes: routes.RouteRecordRaws = [
  { component: Overview, path: "/" },
  ...o.values(components).map(component => {
    return {
      component,
      name: component.name,
      path: `/${component.name}`
    };
  }),
  { path: "/:catchAll(.*)", redirect: (): string => "/" }
];

export namespace routes {
  export type RouteRecordRaws = readonly RouteRecordRaw[];
}
