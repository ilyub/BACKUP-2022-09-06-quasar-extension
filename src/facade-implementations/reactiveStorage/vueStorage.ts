import type {
  Facade,
  Handler,
  Observer,
  Reducer
} from "@skylib/facades/es/reactiveStorage";
import * as fn from "@skylib/functions/es/function";
import * as o from "@skylib/functions/es/object";
import { computed, reactive, watch } from "vue";
import type { WatchStopHandle } from "vue";

declare global {
  namespace facades {
    namespace reactiveStorage {
      interface Observer {
        readonly watchStopHandle: WatchStopHandle;
      }
    }
  }
}

export const implementation = fn.run<Facade>(() =>
  o.extend(
    <T extends object>(obj: T): T =>
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      reactive(obj) as T,
    {
      unwatch(_obj: object, observer: Observer): void {
        observer.watchStopHandle();
      },
      watch<T extends object>(
        obj: T,
        handler: Handler<T>,
        reducer?: Reducer<T>
      ): Observer {
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
