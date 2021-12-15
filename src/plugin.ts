import type { Plugin as VuePlugin } from "vue";

import { components } from "./components";

// eslint-disable-next-line @skylib/prefer-readonly
export const plugin: VuePlugin = {
  install(app) {
    for (const [name, component] of Object.entries(components))
      app.component(name, component);
  }
};
