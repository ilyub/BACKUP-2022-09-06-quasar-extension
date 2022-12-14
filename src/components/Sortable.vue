<script lang="ts">
import { ReadonlySet, as, assert, is, o } from "@skylib/functions";
import { buildElements, isElements, isMoveData } from "./Sortable.internal";
import { computed, defineComponent } from "vue";
import {
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { Sortable } from "./Sortable.extras";
import { Tooltip } from "./Tooltip.extras";
import { VueDraggable } from "./Sortable.vue-draggable";
import type { objects } from "@skylib/functions";

const prop = propFactory<Sortable.OwnProps>();

export default defineComponent({
  name: "m-sortable",
  components: { "vue-draggable": VueDraggable },
  props: {
    group: prop.required("group"),
    itemClass: prop("itemClass"),
    itemKey: prop.required("itemKey"),
    itemTag: prop.default("itemTag", "div"),
    modelValue: prop.required("modelValue"),
    move: prop("move"),
    pull: prop.boolean("pull"),
    put: prop.boolean("put"),
    sort: prop.boolean("sort")
  },
  emits: {
    "dropped": (item: object, group: string) => skipCheck(item, group),
    "itemClick": (item: object) => skipCheck(item),
    "update:modelValue": (value: objects) => skipCheck(value)
  },
  setup: (props, { emit, expose }) => {
    const disableTooltips = Tooltip.useDisableTooltips();

    const settings = Sortable.injectSettings();

    const canPull = computed(
      () => props.pull && !settings.value.disableDropping
    );

    const canPut = computed(() => props.put && !settings.value.disableDropping);

    const canSort = computed(
      () => props.sort && !settings.value.disableSorting
    );

    const ids = computed(
      () =>
        new ReadonlySet(
          props.modelValue.map(item => o.get(item, props.itemKey, is.string))
        )
    );

    validateEmit<Sortable.OwnProps>(emit);
    validateProps<Sortable.OwnProps>(props);
    expose();

    return {
      baseMove: (data: unknown): boolean => {
        assert.byGuard(data, isMoveData, "Expecting move data");

        const destAttrs = data.related.attributes;

        const sourceAttrs = data.dragged.attributes;

        const destId = destAttrs.getNamedItem("data-id");

        const destGroup = destAttrs.getNamedItem("data-group");

        const sourceId = sourceAttrs.getNamedItem("data-id");

        const sourceGroup = sourceAttrs.getNamedItem("data-group");

        return props.move
          ? props.move(
              destId?.value,
              as.not.empty(destGroup).value,
              as.not.empty(sourceId).value,
              as.not.empty(sourceGroup).value
            )
          : true;
      },
      canPull,
      canPut,
      canSort,
      disabled: computed(
        () => !canPull.value && !canPut.value && !canSort.value
      ),
      elements: computed(() =>
        buildElements(props.modelValue, props.group, props.itemKey)
      ),
      end: (): void => {
        disableTooltips.value = false;
      },
      settings,
      slotNames: plugins.slotNames<Sortable.Slots>()(
        "footer",
        "header",
        "item"
      ),
      start: (): void => {
        disableTooltips.value = true;
      },
      update: (elements: unknown): void => {
        assert.byGuard(elements, isElements, "Expecting elements");

        for (const element of elements)
          if (element.group === props.group && ids.value.has(element.id)) {
            // Already was there
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
    :disabled="disabled"
    :group="{ name: group, pull: canPull ? 'clone' : false, put: canPut }"
    item-key="elementId"
    :model-value="elements"
    :move="baseMove"
    :sort="canSort"
    @end="end"
    @start="start"
    @update:model-value="update"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #item="{ element }">
      <component
        :is="itemTag"
        :class="itemClass"
        :data-group="element.group"
        :data-id="element.id"
        @click="$emit('itemClick', element.item)"
      >
        <slot :item="element.item" :name="slotNames.item"></slot>
      </component>
    </template>
    <template v-if="$slots[slotNames.header]" #header="data">
      <slot :name="slotNames.header" v-bind="data ?? {}"></slot>
    </template>
    <template v-if="$slots[slotNames.footer]" #footer="data">
      <slot :name="slotNames.footer" v-bind="data ?? {}"></slot>
    </template>
  </vue-draggable>
</template>
