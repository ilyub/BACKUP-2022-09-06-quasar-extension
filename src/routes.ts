import type { RouteRecordRaw } from "vue-router";

import { components } from "./samples";

export const routes: readonly RouteRecordRaw[] = [
  ...components.map(component => {
    return {
      component,
      name: component.name,
      path: `/${component.name}`
    };
  }),
  {
    component: { template: "<div />" },
    path: "/:catchAll(.*)"
  }
];
