import type * as testUtils from "@vue/test-utils";
import type WrapperLike from "@vue/test-utils/dist/interfaces/wrapperLike";

export type { default as WrapperLike } from "@vue/test-utils/dist/interfaces/wrapperLike";

export interface DOMWrapper extends testUtils.DOMWrapper<Element> {}

export type DOMWrappers = readonly DOMWrapper[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
export type Wrapper = testUtils.VueWrapper<any>;

export type WrapperLikes = readonly WrapperLike[];
