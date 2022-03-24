<script lang="ts">
import { computed, defineComponent } from "vue";
import VueDraggable from "vuedraggable";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as reflect from "@skylib/functions/es/reflect";
import type { objects, Writable } from "@skylib/functions/es/types/core";

import { prop, validateEmit, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  Elems,
  Move,
  SortableProps,
  SortableSlots
} from "./Sortable.extras";
import {
  buildElements,
  injectSortableSettings,
  isElems,
  isMoveData
} from "./Sortable.extras";
import { useDisableTooltips } from "./Tooltip.extras";

export default defineComponent({
  name: "m-sortable",
  components: {
    "vue-draggable": VueDraggable
  },
  props: {
    group: prop.required<string>(),
    itemClass: prop<string>(),
    itemKey: prop.required<string>(),
    itemTag: prop.default<unknown>("div"),
    modelValue: prop.required<objects>(),
    move: prop<Move>(),
    pull: prop.boolean(),
    put: prop.boolean(),
    sort: prop.boolean()
  },
  emits: {
    "dropped": (item: object, group: string) =>
      is.object(item) && is.string(group),
    "itemClick": (item: object) => is.object(item),
    "update:modelValue": (value: objects) => is.objects(value)
  },
  setup(props, { emit }) {
    validateEmit<SortableProps>(emit);
    validateProps<SortableProps>(props);

    const { active } = useDisableTooltips();

    const settings = injectSortableSettings();

    const draggablePull = computed<boolean>(
      () => props.pull && !settings.value.disableDropping
    );

    const draggablePut = computed<boolean>(
      () => props.put && !settings.value.disableDropping
    );

    const draggableSort = computed<boolean>(
      () => props.sort && !settings.value.disableSorting
    );

    return {
      baseMove(data: unknown): boolean {
        assert.byGuard(data, isMoveData);

        const destAttrs = data.related.attributes;

        const sourceAttrs = data.dragged.attributes;

        const destId = destAttrs.getNamedItem("data-id");

        const destGroup = destAttrs.getNamedItem("data-group");

        const sourceId = sourceAttrs.getNamedItem("data-id");

        const sourceGroup = sourceAttrs.getNamedItem("data-group");

        assert.not.empty(destGroup);
        assert.not.empty(sourceId);
        assert.not.empty(sourceGroup);

        return props.move
          ? props.move(
              destId?.value,
              destGroup.value,
              sourceId.value,
              sourceGroup.value
            )
          : true;
      },
      draggableDisabled: computed<boolean>(
        () =>
          !draggablePull.value && !draggablePut.value && !draggableSort.value
      ),
      draggablePull,
      draggablePut,
      draggableSort,
      elements: computed<Writable<Elems>>(() =>
        a.clone(buildElements(props.modelValue, props.group, props.itemKey))
      ),
      end(): void {
        active.value = false;
      },
      itemSlotData(data: unknown): object {
        assert.object(data);

        return data;
      },
      settings,
      slotNames: useSlotsNames<SortableSlots>()("footer", "header", "item"),
      start(): void {
        active.value = true;
      },
      updateModel(elements: unknown): void {
        assert.byGuard(elements, isElems);

        for (const element of elements)
          if (
            element.group === props.group &&
            props.modelValue.some(
              item => reflect.get(item, props.itemKey) === element.id
            )
          ) {
            // Sorted or untouched
          } else emit("dropped", element.item, element.group);

        emit(
          "update:modelValue",
          elements.map(element => element.item)
        );
      }
    };
  }
});
</script>

<template>
  <vue-draggable
    :animation="settings.animationDuration"
    class="m-sortable"
    :data-group="group"
    :disabled="draggableDisabled"
    :group="{
      name: group,
      pull: draggablePull ? 'clone' : false,
      put: draggablePut
    }"
    item-key="elementId"
    :model-value="elements"
    :move="baseMove"
    :sort="draggableSort"
    @end="end"
    @start="start"
    @update:model-value="updateModel"
  >
    <template v-if="$slots[slotNames.header]" #header>
      <slot :name="slotNames.header"></slot>
    </template>
    <template v-if="$slots[slotNames.footer]" #footer>
      <slot :name="slotNames.footer"></slot>
    </template>
    <template #item="{ element }">
      <component
        :is="itemTag"
        :class="itemClass"
        :data-group="element.group"
        :data-id="element.id"
        @click="$emit('itemClick', element.item)"
      >
        <slot :item="itemSlotData(element.item)" :name="slotNames.item"></slot>
      </component>
    </template>
  </vue-draggable>
</template>
