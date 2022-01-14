import type { WatchStopHandle } from "vue";
import { computed, reactive, watch } from "vue";

import type {
  Facade,
  Handler,
  Reducer
} from "@skylib/facades/es/reactiveStorage";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";

export const implementation = fn.run((): Facade => {
  function vueStorage<T extends object>(obj: T): T {
    return reactive(obj) as T;
  }

  vueStorage.unwatch = (_obj: object, observer: unknown): void => {
    assert.callable<WatchStopHandle>(observer);
    observer();
  };

  vueStorage.watch = <T extends object>(
    obj: T,
    handler: Handler<T>,
    reducer?: Reducer<T>
  ): unknown => {
    const reduced = reducer ? computed<unknown>(() => reducer(obj)) : obj;

    return watch(reduced, () => {
      handler(obj);
    });
  };

  return vueStorage;
});
