import type * as testUtils from "@vue/test-utils";
// eslint-disable-next-line @skylib/consistent-import, import/no-internal-modules -- Ok
import type WrapperLike from "@vue/test-utils/dist/interfaces/wrapperLike";

// eslint-disable-next-line import/no-internal-modules -- Ok
export type { default as WrapperLike } from "@vue/test-utils/dist/interfaces/wrapperLike";

export interface DOMWrapper extends testUtils.DOMWrapper<Element> {}

export type DOMWrappers = readonly DOMWrapper[];

export type WrapperLikes = readonly WrapperLike[];
