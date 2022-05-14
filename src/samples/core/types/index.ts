import type { DefineComponent as Base } from "vue";

export interface DefineComponent extends Base<object, object, unknown> {}

export type DefineComponents = readonly DefineComponent[];
