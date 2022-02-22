import { isVirtualScroll } from "@/components/extras/QVirtualScroll";

test("isVirtualScroll", () => {
  expect(isVirtualScroll({})).toBeTrue();
  expect(isVirtualScroll(false)).toBeFalse();
});
