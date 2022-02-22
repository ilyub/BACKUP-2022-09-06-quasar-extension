import { nextTick } from "vue";
import Draggable from "vuedraggable";
import * as vueTestUtils from "@vue/test-utils";

import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";

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

test.each([
  {
    animationDuration: 500
  },
  {
    animationDuration: 1000,
    sortableSettings: { animationDuration: 1000 }
  }
])("animationDuration", ({ animationDuration, sortableSettings }) => {
  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions(
      o.removeUndefinedKeys({
        sortableSettings
      })
    ),
    props
  });

  expect(wrapper.findComponent(Draggable).vm.$attrs["animation"]).toStrictEqual(
    animationDuration
  );
});

test("emit: dropped", () => {
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

  wrapper.findComponent(Draggable).vm.$emit("update:model-value", elements);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[newItems]]);
});

test("end, start", async () => {
  const wrapper = vueTestUtils.mount(Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const draggable = wrapper.findComponent(Draggable);

  {
    draggable.vm.$emit("start");
    await nextTick();
    expect(disabled.value).toBeTrue();
  }

  {
    draggable.vm.$emit("end");
    await nextTick();
    expect(disabled.value).toBeFalse();
  }

  {
    draggable.vm.$emit("start");
    await nextTick();
    expect(disabled.value).toBeTrue();
  }

  {
    wrapper.unmount();
    expect(disabled.value).toBeFalse();
  }
});

test("emit: update:model-value", () => {
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

  wrapper.findComponent(Draggable).vm.$emit("update:model-value", elements);
  expect(wrapper.emitted("dropped")).toStrictEqual([[newItem, newGroup]]);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[newItems]]);
});

test.each([
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

  // eslint-disable-next-line no-type-assertion/no-type-assertion
  const baseMove = wrapper.findComponent(Draggable).props("move") as unknown;

  const moveData = {
    dragged: fn.run(() => {
      const result = document.createElement("div");

      for (const [key, value] of Object.entries(source))
        result.setAttribute(`data-${key}`, value);

      return result;
    }),
    related: fn.run(() => {
      const result = document.createElement("div");

      for (const [key, value] of Object.entries(dest))
        result.setAttribute(`data-${key}`, value);

      return result;
    })
  };

  assert.byGuard(baseMove, is.callable);

  baseMove(moveData);

  await wrapper.setProps({ move });

  baseMove(moveData);

  expect(move).toHaveBeenCalledTimes(1);

  expect(move).toHaveBeenCalledWith(
    dest.id,
    dest.group,
    source.id,
    source.group
  );
});
