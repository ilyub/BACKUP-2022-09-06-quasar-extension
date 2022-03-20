import { QTd, QTh, QTr } from "quasar";
import type { Plugin as VuePlugin } from "vue";

import { components } from "./components";

// eslint-disable-next-line @skylib/prefer-readonly
export const plugin: VuePlugin = {
  install(app) {
    for (const component of components)
      app.component(component.name, component);

    app.component("q-td", QTd);
    app.component("q-th", QTh);
    app.component("q-tr", QTr);
  }
};
