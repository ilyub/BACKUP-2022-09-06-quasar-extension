import { Overview, components } from "./samples";
import type { RouteRecordRaw } from "vue-router";
import type { RouteRecordRaws } from "./components";
import { o } from "@skylib/functions";

export const routes: RouteRecordRaws = [
  { component: Overview, path: "/" },
  ...o.values(components).map(
    (component): RouteRecordRaw => ({
      component,
      name: component.name,
      path: `/${component.name}`
    })
  ),
  { path: "/:catchAll(.*)", redirect: (): string => "/" }
];
