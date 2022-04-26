import { implementations as implementations2 } from "..";
import { plugin } from "../plugin";
import { icons as iconsImplementation } from "./icons";
import { definitions } from "./lang";
import {
  compare,
  datetime,
  handlePromise,
  icons,
  inlineSearch,
  lang,
  progressReporter,
  reactiveStorage,
  testDelay
} from "@skylib/facades";
import { implementations } from "@skylib/framework";
import { cast } from "@skylib/functions";
import { Notify } from "quasar";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  {
    compare.setImplementation(implementations.compare.naturalCompare);
    datetime.setImplementation(
      implementations.datetime.dateFnsWrapper.implementation
    );
    handlePromise.setImplementation(
      implementations.handlePromise.promiseHandler.implementation
    );
    icons.setImplementation(iconsImplementation);
    inlineSearch.setImplementation(implementations.inlineSearch.lunrWrapper);
    lang.setImplementation(
      implementations.lang.dictionary.Dictionary.create(definitions)
    );
    progressReporter.setImplementation(
      implementations.progressReporter.progressBar.implementation
    );
    reactiveStorage.setImplementation(
      implementations2.reactiveStorage.vueStorage
    );
    testDelay.setImplementation(
      implementations.testDelay.configurableTestDelay.implementation
    );
  }

  {
    implementations.lang.dictionary.Dictionary.configure({
      localeName: "en-US"
    });

    implementations.testDelay.configurableTestDelay.configure({
      enabled: true,
      timeout: 1000
    });

    implementations.progressReporter.progressBar.configure({
      activeClass: "progress-bar-active",
      enabled: true,
      finalEasing: true,
      finalEasingSpeed: 500,
      latency: 100,
      precision: 3,
      selector: "#progressBar",
      updateInterval: 100
    });

    implementations.handlePromise.promiseHandler.configure({
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
      Notify.create({ color: "negative", message: cast.string(err) });
    };

    app.config.warnHandler = function (err, _vm, info): void {
      // eslint-disable-next-line no-console
      console.warn(err, info);
      Notify.create({ color: "negative", message: cast.string(err) });
    };

    app.use(plugin);
  }
});
