import type { reactiveStorage } from "@skylib/facades";
import { assert, fn, o } from "@skylib/functions";
import { computed, reactive, watch } from "vue";
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

export const implementation = fn.run<reactiveStorage.Facade>(() =>
  o.extend(
    <T extends object>(obj: T): T =>
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      reactive(obj) as T,
    {
      unwatch(_obj: object, observer: reactiveStorage.Observer): void {
        assert.not.empty(observer.watchStopHandle);
        observer.watchStopHandle();
      },
      watch<T extends object>(
        obj: T,
        handler: reactiveStorage.Handler<T>,
        reducer?: reactiveStorage.Reducer<T>
      ): reactiveStorage.Observer {
        const reduced = reducer ? computed<unknown>(() => reducer(obj)) : obj;

        return {
          _type: "ReactiveStorageObserver",
          watchStopHandle: watch(reduced, () => {
            handler(obj);
          })
        };
      }
    }
  )
);
