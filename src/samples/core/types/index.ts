import type { DefineComponent as Base } from "vue";

// eslint-disable-next-line @skylib/require-jsdoc -- Ok
export interface DefineComponent extends Base<object, object, unknown> {}

export type DefineComponents = readonly DefineComponent[];
