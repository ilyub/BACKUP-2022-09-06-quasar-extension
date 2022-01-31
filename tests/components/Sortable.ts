import { nextTick } from "vue";
import Draggable from "vuedraggable";
import * as vueTestUtils from "@vue/test-utils";

import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";

import { buildElements } from "@/components/Sortable.extras";
import Sortable from "@/components/Sortable.vue";
import { disabled } from "@/components/Tooltip.extras";
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

  warnSpy.mockImplementationOnce(warnMock);
  wrapper.findComponent(Draggable).vm.$emit("update:model-value", elements);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[newItems]]);
  expect(warnMock).toBeCalledTimes(1);
  expect(warnMock).toBeCalledWith(
    '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
  );
  warnMock.mockClear();
});

it("end, start", async () => {
  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const draggable = wrapper.findComponent(Draggable);

  for (const show of [true, false, true]) {
    draggable.vm.$emit(show ? "start" : "end");
    await nextTick();
    expect(disabled.value).toStrictEqual(show);
  }

  wrapper.unmount();
  expect(disabled.value).toBeFalse();
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

  warnSpy.mockImplementationOnce(warnMock);
  wrapper.findComponent(Draggable).vm.$emit("update:model-value", elements);
  expect(wrapper.emitted("dropped")).toStrictEqual([[newItem, newGroup]]);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[newItems]]);
  expect(warnMock).toBeCalledTimes(1);
  expect(warnMock).toBeCalledWith(
    '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
  );
  warnMock.mockClear();
});

it.each([
  {
    dest: {
      group: "dest-group",
      id: "dest-id"
    },
    source: {
      group: "source-group",
      id: "source-id"
    }
  },
  {
    dest: {
      group: "dest-group"
    },
    source: {
      group: "source-group",
      id: "source-id"
    }
  }
])("prop: move", async ({ dest, source }) => {
  const move = jest.fn();

  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const baseMove = wrapper.findComponent(Draggable).props("move") as unknown;

  const moveData = {
    dragged: fn.run(() => {
      const result = document.createElement("div");

      for (const [key, value] of Object.entries(source))
        result.dataset[key] = value;

      return result;
    }),
    related: fn.run(() => {
      const result = document.createElement("div");

      for (const [key, value] of Object.entries(dest))
        result.dataset[key] = value;

      return result;
    })
  };

  assert.byGuard(baseMove, is.callable);
  baseMove(moveData);
  await wrapper.setProps({ move });
  baseMove(moveData);
  expect(move).toBeCalledTimes(1);
  expect(move).toBeCalledWith(dest.id, dest.group, source.id, source.group);
  warnMock.mockClear();
});
