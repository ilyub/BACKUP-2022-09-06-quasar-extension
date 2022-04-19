import { reactiveStorage } from "@skylib/facades";
import { nextTick } from "vue";

test("reactiveStorage", async () => {
  const callback = jest.fn();

  const obj = reactiveStorage(reactiveStorage({ x: 0, y: { z: 0 } }));

  const observer = reactiveStorage.watch(obj, callback);

  {
    obj.x = 1;
    await nextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ x: 1, y: { z: 0 } });
    callback.mockClear();
  }

  {
    obj.y.z = 1;
    await nextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ x: 1, y: { z: 1 } });
    callback.mockClear();
  }

  {
    reactiveStorage.unwatch(obj, observer);
    obj.x = 2;
    obj.y.z = 2;
    await nextTick();
    expect(callback).not.toHaveBeenCalled();
  }
});

test("reactiveStorage: reducer", async () => {
  const callback = jest.fn();

  const obj = reactiveStorage(reactiveStorage({ x: 0, y: { z: 0 } }));

  const observer = reactiveStorage.watch(obj, callback, value => value.x);

  {
    obj.x = 1;
    await nextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ x: 1, y: { z: 0 } });
    callback.mockClear();
  }

  {
    obj.y.z = 1;
    await nextTick();
    expect(callback).not.toHaveBeenCalled();
  }

  {
    reactiveStorage.unwatch(obj, observer);
    obj.x = 2;
    obj.y.z = 2;
    await nextTick();
    expect(callback).not.toHaveBeenCalled();
  }
});
