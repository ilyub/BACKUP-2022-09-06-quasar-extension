import * as is from "@skylib/functions/es/guards";

import { isBodyCellSlotDataFactory } from "@/components/PageTable.extras";

it("isBodyCellSlotDataFactory", () => {
  expect(() => isBodyCellSlotDataFactory(is.unknown)).not.toThrow();
});
