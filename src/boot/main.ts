import { plugin } from "../plugin";
import { cast, is } from "@skylib/functions";
import { Notify } from "quasar";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.config.errorHandler = function (err, _vm, info): void {
    // eslint-disable-next-line no-console -- Ok
    console.error(err, info);

    if (is.not.empty(Notify.create))
      Notify.create({ color: "negative", message: cast.string(err) });
    // eslint-disable-next-line no-console -- Ok
    else console.error('Missing "Notify.create"');
  };

  app.config.warnHandler = function (err, _vm, info): void {
    // eslint-disable-next-line no-console -- Ok
    console.warn(err, info);

    if (is.not.empty(Notify.create))
      Notify.create({ color: "negative", message: cast.string(err) });
    // eslint-disable-next-line no-console -- Ok
    else console.error('Missing "Notify.create"');
  };

  app.use(plugin);
});
