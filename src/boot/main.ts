/* eslint-disable @skylib/custom/functions/is-not-empty-arg-type -- Postponed */

/* eslint-disable no-console -- Ok */

import { cast, is } from "@skylib/functions";
import { Notify } from "quasar";
import { boot } from "quasar/wrappers";
import { plugin } from "../plugin";

export default boot(({ app }) => {
  app.config.errorHandler = function (err, _vm, info): void {
    console.error(err, info);

    if (is.not.empty(Notify.create))
      Notify.create({ color: "negative", message: cast.string(err) });
    else console.error('Missing "Notify.create"');
  };

  app.config.warnHandler = function (err, _vm, info): void {
    console.warn(err, info);

    if (is.not.empty(Notify.create))
      Notify.create({ color: "negative", message: cast.string(err) });
    else console.error('Missing "Notify.create"');
  };

  app.use(plugin);
});
