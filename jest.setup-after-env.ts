// eslint-disable-next-line import/no-internal-modules
import { icons as iconsImplementation } from "./src/boot/icons";
// eslint-disable-next-line import/no-internal-modules
import { definitions } from "./src/boot/lang";
import * as testUtils from "./src/testUtils";
import { icons } from "@skylib/facades";
import * as frameworkTestUtils from "@skylib/framework/dist/testUtils";
import * as functionsTestUtils from "@skylib/functions/dist/testUtils";

icons.setImplementation(iconsImplementation);
functionsTestUtils.jestSetup();
frameworkTestUtils.jestSetup();
frameworkTestUtils.jestSetup.dictionary("en-US", definitions);
frameworkTestUtils.jestSetup.dom();
testUtils.jestSetup();
beforeEach(functionsTestUtils.jestReset);
beforeEach(frameworkTestUtils.jestReset);
beforeEach(() => {
  frameworkTestUtils.jestReset.dictionary("en-US", definitions);
});
beforeEach(frameworkTestUtils.jestReset.dom);
beforeEach(testUtils.jestReset);
