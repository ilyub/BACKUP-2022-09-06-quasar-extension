import { injectable } from "./misc";

export namespace globalDisable {
  export const { inject, provide } = injectable(() => false);
}

export namespace submitting {
  export const { inject, provide } = injectable(() => false);
}
