import { Notify } from "quasar";
import { boot } from "quasar/wrappers";

import { handlePromise } from "@skylib/facades/es/handlePromise";
import { icons } from "@skylib/facades/es/icons";
import { lang } from "@skylib/facades/es/lang";
import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import { testDelay } from "@skylib/facades/es/testDelay";
import * as promiseHandler from "@skylib/framework/es/facade-implementations/handlePromise/promiseHandler";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import * as configurableTestDelay from "@skylib/framework/es/facade-implementations/testDelay/configurableTestDelay";
import * as cast from "@skylib/functions/es/converters";

import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";
import { plugin } from "../plugin";

import { icons as iconsImplementation } from "./icons";
import { definitions } from "./lang";

// eslint-disable-next-line import/no-default-export
export default boot(({ app }) => {
  {
    reactiveStorage.setImplementation(vueStorage.implementation);
    handlePromise.setImplementation(promiseHandler.implementation);
    icons.setImplementation(iconsImplementation);
    lang.setImplementation(Dictionary.create(definitions));
    testDelay.setImplementation(configurableTestDelay.implementation);
  }

  {
    Dictionary.configure({ localeName: "en-US" });

    configurableTestDelay.configure({
      enabled: true,
      timeout: 1000
    });

    promiseHandler.configure({
      expectedDurations: {
        createDb: 3000,
        dbRequest: 3000,
        destroyDb: 3000,
        httpRequest: 3000,
        navigation: 3000
      }
    });
  }

  {
    // eslint-disable-next-line @skylib/prefer-readonly
    app.config.errorHandler = function (err, _vm, info): void {
      // eslint-disable-next-line no-console
      console.error(err, info);
      Notify.create({
        color: "negative",
        message: cast.string(err)
      });
    };

    // eslint-disable-next-line @skylib/prefer-readonly
    app.config.warnHandler = function (err, _vm, info): void {
      // eslint-disable-next-line no-console
      console.warn(err, info);
      Notify.create({
        color: "negative",
        message: cast.string(err)
      });
    };

    app.use(plugin);
  }
});
