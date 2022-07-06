import { plugin } from "../plugin";
import { cast, is } from "@skylib/functions";
import { Notify } from "quasar";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.config.errorHandler = function (err, _vm, info): void {
    console.error(err, info);

    // eslint-disable-next-line @skylib/custom/functions/is-not-empty-arg-type -- Postponed
    if (is.not.empty(Notify.create))
      Notify.create({ color: "negative", message: cast.string(err) });
    else console.error('Missing "Notify.create"');
  };

  app.config.warnHandler = function (err, _vm, info): void {
    console.warn(err, info);

    // eslint-disable-next-line @skylib/custom/functions/is-not-empty-arg-type -- Postponed
    if (is.not.empty(Notify.create))
      Notify.create({ color: "negative", message: cast.string(err) });
    else console.error('Missing "Notify.create"');
  };

  app.use(plugin);
});
