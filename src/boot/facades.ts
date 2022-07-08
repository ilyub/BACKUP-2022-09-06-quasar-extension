import * as app from "../application";
import {
  compare,
  datetime,
  dump,
  handlePromise,
  icons,
  inlineSearch,
  lang,
  progressReporter,
  reactiveStorage,
  testDelay
} from "@skylib/facades";
import { boot } from "quasar/wrappers";
import { implementations as frameworkImplementations } from "@skylib/framework";
import { implementations } from "..";

export default boot(() => {
  const { naturalCompareWrapper } = frameworkImplementations.compare;

  const { dateFnsWrapper } = frameworkImplementations.datetime;

  const { stringifyObjectWrapper } = frameworkImplementations.dump;

  const { promiseHandler } = frameworkImplementations.handlePromise;

  const { lunrWrapper } = frameworkImplementations.inlineSearch;

  const { dictionary } = frameworkImplementations.lang;

  const { progressBar } = frameworkImplementations.progressReporter;

  const { vueStorage } = implementations.reactiveStorage;

  const { configurableTestDelay } = frameworkImplementations.testDelay;

  compare.setImplementation(naturalCompareWrapper);
  datetime.setImplementation(dateFnsWrapper);
  dump.setImplementation(stringifyObjectWrapper);
  handlePromise.setImplementation(promiseHandler);
  icons.setImplementation(app.icons);
  inlineSearch.setImplementation(lunrWrapper);
  lang.setImplementation(dictionary.Dictionary.create(app.lang.definitions));
  progressReporter.setImplementation(progressBar);
  reactiveStorage.setImplementation(vueStorage);
  testDelay.setImplementation(configurableTestDelay);
  configurableTestDelay.configure({ enabled: true, timeout: 1000 });
});
