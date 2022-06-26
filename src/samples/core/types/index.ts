import type { DefineComponent as Base } from "vue";

// eslint-disable-next-line @skylib/require-jsdoc -- Wait for @skylib/eslint-plugin update
export interface DefineComponent extends Base<object, object, unknown> {}

export type DefineComponents = readonly DefineComponent[];
