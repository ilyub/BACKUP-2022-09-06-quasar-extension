import { reactiveStorage } from "@skylib/facades";
import { nextTick } from "vue";

test("reducer", async () => {
  const callback = jest.fn();

  const obj = reactiveStorage(reactiveStorage({ x: 0, y: { z: 0 } }));

  const observer = reactiveStorage.watch(obj, callback, value => value.x);

  {
    obj.x = 1;
    await nextTick();
    expect(callback).mockCallsToBe([{ x: 1, y: { z: 0 } }]);
  }

  {
    obj.y.z = 1;
    await nextTick();
    expect(callback).mockCallsToBe();
  }

  {
    reactiveStorage.unwatch(obj, observer);
    obj.x = 2;
    obj.y.z = 2;
    await nextTick();
    expect(callback).mockCallsToBe();
  }
});

test("watch, unwatch", async () => {
  const callback = jest.fn();

  const obj = reactiveStorage(reactiveStorage({ x: 0, y: { z: 0 } }));

  const observer = reactiveStorage.watch(obj, callback);

  {
    obj.x = 1;
    await nextTick();
    expect(callback).mockCallsToBe([{ x: 1, y: { z: 0 } }]);
  }

  {
    obj.y.z = 1;
    await nextTick();
    expect(callback).mockCallsToBe([{ x: 1, y: { z: 1 } }]);
  }

  {
    reactiveStorage.unwatch(obj, observer);
    obj.x = 2;
    obj.y.z = 2;
    await nextTick();
    expect(callback).mockCallsToBe();
  }
});
