import { icons } from "@skylib/facades/es/icons";
import * as frameworkTestUtils from "@skylib/framework/es/testUtils";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";
import { icons as iconsImplementation } from "./src/boot/icons";
import { definitions } from "./src/boot/lang";
import * as testUtils from "./src/testUtils";

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
