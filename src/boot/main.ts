/* eslint-disable no-console -- Ok */

import { Notify } from "quasar";
import { boot } from "quasar/wrappers";
import { cast } from "@skylib/functions";
import { plugin } from "../plugin";

export default boot(({ app }) => {
  app.config.errorHandler = function (err, _vm, info): void {
    console.error(err, info);
    Notify.create({ color: "negative", message: cast.string(err) });
  };
  app.config.warnHandler = function (err, _vm, info): void {
    console.warn(err, info);
    Notify.create({ color: "negative", message: cast.string(err) });
  };
  app.use(plugin);
});
