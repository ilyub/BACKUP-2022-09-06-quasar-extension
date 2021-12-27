import { QSelect } from "quasar";
import * as testUtils from "@vue/test-utils";

import * as a from "@skylib/functions/es/array";

import type { SelectOptions } from "@/components/Select.extras";
import Select from "@/components/Select.vue";

it.each([0, 1, 2])("Select", index => {
  const options: SelectOptions<undefined | 1 | "a"> = [
    { disable: true, label: "Select option", value: undefined },
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: "a" }
  ];

  const wrapper = testUtils.mount(Select, {
    props: {
      options
    }
  });

  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  warnSpy.mockImplementation(warnMock);
  wrapper.findComponent(QSelect).vm.$emit("update:model-value", options[index]);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([
    [a.get(options, index).value]
  ]);
  expect(warnMock).toBeCalledTimes(1);
  expect(warnMock).toBeCalledWith(
    '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
  );
  warnMock.mockClear();
});
