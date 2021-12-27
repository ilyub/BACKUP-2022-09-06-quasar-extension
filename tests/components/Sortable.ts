import Draggable from "vuedraggable";
import * as vueTestUtils from "@vue/test-utils";

import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";

import { buildElements } from "@/components/Sortable.extras";
import Sortable from "@/components/Sortable.vue";
import * as testUtils from "@/testUtils";

const group = "sample-group";

const itemKey = "id";

const items = [
  { id: "id1", name: "Name 1" },
  { id: "id2", name: "Name 2" },
  { id: "id3", name: "Name 3" }
];

const props = {
  group,
  itemKey,
  modelValue: items
};

const warnMock = jest.fn();

const warnSpy = jest.spyOn(console, "warn");

it.each([undefined, 1000])("animationDuration", animationDuration => {
  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions(
      is.not.empty(animationDuration)
        ? { sortableSettings: { animationDuration } }
        : {}
    ),
    props
  });

  expect(wrapper.findComponent(Draggable).vm.$attrs["animation"]).toStrictEqual(
    animationDuration ?? 500
  );
});

it("emit: dropped", () => {
  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const newItems = [
    { id: "id2", name: "Name 2" },
    { id: "id1", name: "Name 1" },
    { id: "id3", name: "Name 3" }
  ];

  const elements = buildElements(newItems, group, itemKey);

  warnSpy.mockImplementation(warnMock);
  wrapper.findComponent(Draggable).vm.$emit("update:model-value", elements);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[newItems]]);
  expect(warnMock).toBeCalledTimes(1);
  expect(warnMock).toBeCalledWith(
    '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
  );
  warnMock.mockClear();
});

it("emit: update:model-value", () => {
  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions({}),
    props
  });

  const newGroup = "another-group";

  const newItem = { id: "id4", name: "Name 4" };

  const newItems = [...items, newItem];

  const elements = [
    ...buildElements(items, group, itemKey),
    ...buildElements([newItem], newGroup, itemKey)
  ];

  warnSpy.mockImplementation(warnMock);
  wrapper.findComponent(Draggable).vm.$emit("update:model-value", elements);
  expect(wrapper.emitted("dropped")).toStrictEqual([[newItem, newGroup]]);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[newItems]]);
  expect(warnMock).toBeCalledTimes(1);
  expect(warnMock).toBeCalledWith(
    '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
  );
  warnMock.mockClear();
});

it("prop: move", async () => {
  const move = jest.fn();

  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const baseMove = wrapper.findComponent(Draggable).props("move") as unknown;

  const moveData = {
    dragged: fn.run(() => {
      const result = document.createElement("div");

      result.dataset["group"] = "dragged-group";
      result.dataset["id"] = "dragged-id";

      return result;
    }),
    related: fn.run(() => {
      const result = document.createElement("div");

      result.dataset["group"] = "related-group";
      result.dataset["id"] = "related-id";

      return result;
    })
  };

  const expected = [
    "related-id",
    "related-group",
    "dragged-id",
    "dragged-group"
  ];

  assert.byGuard(baseMove, is.callable);
  baseMove(moveData);
  await wrapper.setProps({ move });
  baseMove(moveData);
  expect(move).toBeCalledTimes(1);
  expect(move).toBeCalledWith(...expected);
  warnMock.mockClear();
});
