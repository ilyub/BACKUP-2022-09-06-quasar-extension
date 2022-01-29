<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import Draggable from "vuedraggable";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as reflect from "@skylib/functions/es/reflect";
import type { Writable } from "@skylib/functions/es/types/core";

import { propOptions } from "./api";
import type { Elems, SortableSettings } from "./Sortable.extras";
import {
  buildElements,
  defaultSortableSettings,
  injectSortableSettings,
  isElems,
  isMoveData,
  isMoveU
} from "./Sortable.extras";
import { useDisableTooltips } from "./Tooltip.extras";

export default defineComponent({
  name: "s-sortable",
  components: {
    draggable: Draggable
  },
  props: {
    group: propOptions.required(is.string),
    itemComponentData: propOptions(is.objectU),
    itemKey: propOptions.required(is.string),
    itemTag: propOptions.default(is.unknown, "div"),
    modelValue: propOptions.required(is.objects),
    move: propOptions(isMoveU)
  },
  emits: {
    "dropped"(item: object, group: string) {
      return is.object(item) && is.string(group);
    },
    "update:model-value"(value: unknown) {
      return is.objects(value);
    }
  },
  setup(props, { emit }) {
    const { active } = useDisableTooltips();

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
      elements: computed<Writable<Elems>>(() =>
        a.clone(buildElements(props.modelValue, props.group, props.itemKey))
      ),
      end(): void {
        active.value = false;
      },
      settings: inject(
        injectSortableSettings,
        computed<SortableSettings>(defaultSortableSettings)
      ),
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
          "update:model-value",
          elements.map(element => element.item)
        );
      }
    };
  }
});
</script>

<template>
  <draggable
    :animation="settings.animationDuration"
    :data-group="group"
    :group="{
      name: group,
      pull: 'clone',
      put: true
    }"
    item-key="elementId"
    :model-value="elements"
    :move="baseMove"
    @end="end"
    @start="start"
    @update:model-value="updateModel"
  >
    <template #header><slot name="header"></slot></template>
    <template #item="{ element }">
      <component
        :is="itemTag"
        :data-group="element.group"
        :data-id="element.id"
        v-bind="itemComponentData"
      >
        <slot :item="element.item" name="item"></slot>
      </component>
    </template>
    <template #footer><slot name="footer"></slot></template>
  </draggable>
</template>
