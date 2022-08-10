/* eslint jest/max-expects: [warn, { max: 4 }] -- Ok */
/* eslint-disable @skylib/typescript/prefer-readonly-property -- Ok */

import { nextTick } from "vue";
import { reactiveStorage } from "@skylib/facades";

interface TestObject {
  x: number;
  y: TestSubObject;
}

interface TestSubObject {
  z: number;
}

test("reducer", async () => {
  const callback = jest.fn();

  const obj = reactiveStorage(
    reactiveStorage<TestObject>({ x: 0, y: { z: 0 } })
  );

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

  const obj = reactiveStorage(
    reactiveStorage<TestObject>({ x: 0, y: { z: 0 } })
  );

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
