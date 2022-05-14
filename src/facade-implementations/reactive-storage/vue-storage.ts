import { as, defineFn } from "@skylib/functions";
import { computed, reactive, watch } from "vue";
import type { reactiveStorage } from "@skylib/facades";
import type { WatchStopHandle } from "vue";

declare global {
  namespace facades {
    namespace reactiveStorage {
      interface Observer {
        readonly watchStopHandle?: WatchStopHandle;
      }
    }
  }
}

export const vueStorage: reactiveStorage.Facade = defineFn(
  // eslint-disable-next-line @skylib/require-jsdoc -- Ok
  <T extends object>(obj: T): T =>
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    reactive(obj) as T,
  {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    unwatch: (_obj: object, observer: reactiveStorage.Observer): void => {
      as.not.empty(observer.watchStopHandle)();
    },
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    watch: <T extends object>(
      obj: T,
      handler: reactiveStorage.Handler<T>,
      reducer?: reactiveStorage.Reducer<T>
    ): reactiveStorage.Observer => {
      const reduced = reducer ? computed(() => reducer(obj)) : obj;

      return {
        _type: "ReactiveStorageObserver",
        watchStopHandle: watch(reduced, () => {
          handler(obj);
        })
      };
    }
  }
);
