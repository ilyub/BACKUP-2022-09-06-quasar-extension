import type { Plugin as VuePlugin } from "vue";

import { components } from "./components";

export const plugin: VuePlugin = {
  install(app) {
    for (const component of components)
      app.component(component.name, component);
  }
};
