/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */
/* eslint-disable @skylib/consistent-import -- Ok */
/* eslint-disable @skylib/no-at-sign-internal-import -- Ok */
/* eslint-disable @skylib/no-internal-modules -- Ok */
/* eslint-disable no-console -- Ok */

import * as internal from "@/test-utils/jest.internal";
import { fn } from "@skylib/functions";

test("jestSetup: warn", () => {
  const warn = jest.spyOn(internal, "warn");

  warn.mockImplementationOnce(fn.noop);
  expect(() => {
    console.warn("Test warning");
  }).toThrow(new Error("Console warn"));
  expect(warn).mockCallsToBe(["Test warning"]);
});
