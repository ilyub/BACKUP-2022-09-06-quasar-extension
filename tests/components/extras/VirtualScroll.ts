import { isVirtualScroll } from "@/components/extras/VirtualScroll";

it("isVirtualScroll", () => {
  expect(isVirtualScroll({})).toBeTrue();
  expect(isVirtualScroll(false)).toBeFalse();
});
