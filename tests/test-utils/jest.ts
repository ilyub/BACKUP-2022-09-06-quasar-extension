// eslint-disable-next-line @skylib/consistent-import, import/no-internal-modules -- Ok
import * as internal from "@/test-utils/jest.internal";
import { fn } from "@skylib/functions";

test("jestSetup: warn", () => {
  const warn = jest.spyOn(internal, "warn");

  warn.mockImplementationOnce(fn.noop);
  expect(() => {
    // eslint-disable-next-line no-console -- Ok
    console.warn("Test warning");
  }).toThrow(new Error("Console warn"));
  expect(warn).toHaveBeenCalledTimes(1);
  expect(warn).toHaveBeenCalledWith("Test warning");
});
