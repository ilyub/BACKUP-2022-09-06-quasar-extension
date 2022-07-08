import type { Plugin as VuePlugin } from "vue";
import { components } from "./components";
import { o } from "@skylib/functions";

export const plugin: VuePlugin = {
  install: app => {
    for (const component of o.values(components))
      app.component(component.name, component);
  }
};
