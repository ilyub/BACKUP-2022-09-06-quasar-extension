import { injectable } from "./misc";

export namespace submitting {
  export const { inject, provide } = injectable(() => false);
}
