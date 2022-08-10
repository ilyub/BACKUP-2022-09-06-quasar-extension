// eslint-disable-next-line @skylib/no-internal-modules -- Ok
import * as app from "./src/application";
import * as frameworkTestUtils from "@skylib/framework/dist/test-utils";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as testUtils from "./src/test-utils";
import { icons } from "@skylib/facades";

icons.setImplementation(app.icons);
functionsTestUtils.jestSetup();
frameworkTestUtils.jestSetup();
frameworkTestUtils.jestSetup.dictionary("en-US", app.lang.definitions);
testUtils.jestSetup();
beforeEach(functionsTestUtils.jestReset);
beforeEach(frameworkTestUtils.jestReset);
beforeEach(() => {
  frameworkTestUtils.jestReset.dictionary("en-US", app.lang.definitions);
});
beforeEach(testUtils.jestReset);
