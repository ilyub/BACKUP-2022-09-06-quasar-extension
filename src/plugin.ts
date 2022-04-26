import { components } from "./components";
import type { Plugin as VuePlugin } from "vue";

export const plugin: VuePlugin = {
  install(app) {
    for (const component of components)
      app.component(component.name, component);
  }
};
