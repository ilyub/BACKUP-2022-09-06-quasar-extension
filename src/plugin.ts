import { components } from "./components";
import { o } from "@skylib/functions";
import type { Plugin as VuePlugin } from "vue";

export const plugin: VuePlugin = {
  install: app => {
    for (const component of o.values(components))
      app.component(component.name, component);
  }
} as const;
