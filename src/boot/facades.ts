import { implementations } from "..";
import * as app from "../application";
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
import { implementations as frameworkImplementations } from "@skylib/framework";
import { boot } from "quasar/wrappers";

export default boot(() => {
  const { naturalCompareWrapper } = frameworkImplementations.compare;

  const { dateFnsWrapper } = frameworkImplementations.datetime;

  const { promiseHandler } = frameworkImplementations.handlePromise;

  const { lunrWrapper } = frameworkImplementations.inlineSearch;

  const { dictionary } = frameworkImplementations.lang;

  const { progressBar } = frameworkImplementations.progressReporter;

  const { vueStorage } = implementations.reactiveStorage;

  const { configurableTestDelay } = frameworkImplementations.testDelay;

  compare.setImplementation(naturalCompareWrapper);
  datetime.setImplementation(dateFnsWrapper);
  handlePromise.setImplementation(promiseHandler);
  icons.setImplementation(app.icons);
  inlineSearch.setImplementation(lunrWrapper);
  lang.setImplementation(dictionary.Dictionary.create(app.lang.definitions));
  progressReporter.setImplementation(progressBar);
  reactiveStorage.setImplementation(vueStorage);
  testDelay.setImplementation(configurableTestDelay);
  // eslint-disable-next-line no-warning-comments -- Wait for @skylib/framework update
  // fixme
  progressBar.configure({ enabled: true, finalEasing: true });
  configurableTestDelay.configure({ enabled: true, timeout: 1000 });
});
