import { isVirtualScroll } from "@/components/extras/QVirtualScroll";

it("isVirtualScroll", () => {
  expect(isVirtualScroll({})).toBeTrue();
  expect(isVirtualScroll(false)).toBeFalse();
});
