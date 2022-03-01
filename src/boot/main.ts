import { Notify } from "quasar";
import { boot } from "quasar/wrappers";

import { compare } from "@skylib/facades/es/compare";
import { datetime } from "@skylib/facades/es/datetime";
import { handlePromise } from "@skylib/facades/es/handlePromise";
import { icons } from "@skylib/facades/es/icons";
import { inlineSearch } from "@skylib/facades/es/inlineSearch";
import { lang } from "@skylib/facades/es/lang";
import { progressReporter } from "@skylib/facades/es/progressReporter";
import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import { testDelay } from "@skylib/facades/es/testDelay";
import * as naturalCompareWrapper from "@skylib/framework/es/facade-implementations/compare/natural-compare-wrapper";
import * as dateFnsWrapper from "@skylib/framework/es/facade-implementations/datetime/date-fns-wrapper";
import * as promiseHandler from "@skylib/framework/es/facade-implementations/handlePromise/promiseHandler";
import * as lunrWrapper from "@skylib/framework/es/facade-implementations/inlineSearch/lunr-wrapper";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import * as progressBar from "@skylib/framework/es/facade-implementations/progressReporter/progressBar";
import * as configurableTestDelay from "@skylib/framework/es/facade-implementations/testDelay/configurableTestDelay";
import * as cast from "@skylib/functions/es/converters";

import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";
import { plugin } from "../plugin";

import { icons as iconsImplementation } from "./icons";
import { definitions } from "./lang";

export default boot(({ app }) => {
  {
    compare.setImplementation(naturalCompareWrapper.implementation);
    datetime.setImplementation(dateFnsWrapper.implementation);
    handlePromise.setImplementation(promiseHandler.implementation);
    icons.setImplementation(iconsImplementation);
    inlineSearch.setImplementation(lunrWrapper.implementation);
    lang.setImplementation(Dictionary.create(definitions));
    progressReporter.setImplementation(progressBar.implementation);
    reactiveStorage.setImplementation(vueStorage.implementation);
    testDelay.setImplementation(configurableTestDelay.implementation);
  }

  {
    Dictionary.configure({ localeName: "en-US" });

    configurableTestDelay.configure({
      enabled: true,
      timeout: 1000
    });

    progressBar.configure({
      activeClass: "progress-bar-active",
      enabled: true,
      finalEasing: true,
      finalEasingSpeed: 500,
      latency: 100,
      precision: 3,
      selector: "#progressBar",
      updateInterval: 100
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
    app.config.errorHandler = function (err, _vm, info): void {
      // eslint-disable-next-line no-console
      console.error(err, info);
      Notify.create({
        color: "negative",
        message: cast.string(err)
      });
    };

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
