<script lang="ts">
import { ReadonlySet, a, is } from "@skylib/functions";
import { compare, inlineSearch } from "@skylib/facades";
import { computed, defineComponent } from "vue";
import { directives, plugins, propFactory, validateProps } from "./api";
import { Group } from "./Group.extras";
import PageSection from "./PageSection.vue";
import Section from "./Section.vue";
import Subsection from "./Subsection.vue";

const prop = propFactory<Group.OwnProps>();

interface TranslatedItem extends Omit<Group.Item, "title"> {
  readonly id: string;
  readonly show: boolean;
  readonly title: string;
}

export default defineComponent({
  name: "m-group",
  directives: { debugId: directives.debugId("group") },
  inheritAttrs: false,
  props: {
    ...plugins.langProps.props("notFoundLabel"),
    items: prop.required("items"),
    rootElement: prop("rootElement"),
    searchString: prop("searchString")
  },
  setup: (props, { expose }) => {
    const { lang } = Group;

    const filteredItems = computed(() => {
      if (is.not.empty(props.searchString)) {
        const ids = new ReadonlySet(
          searchIndex.value.search(props.searchString).map(item => item.id)
        );

        return searchIndex.value.search(props.searchString).map(
          (item): TranslatedItem => ({
            ...item,
            show: item.show && ids.has(item.id)
          })
        );
      }

      return sortedItems.value;
    });

    const items = computed(() =>
      props.items.map(
        (item): TranslatedItem => ({ ...item, title: lang.get(item.title) })
      )
    );

    const { notFoundLabel } = plugins.langProps(props, "notFoundLabel");

    const searchIndex = computed(() =>
      inlineSearch.create("id", ["title"], sortedItems.value)
    );

    const sortedItems = computed(() =>
      a.sort(items.value, (item1, item2) =>
        compare.strings(item1.title, item2.title)
      )
    );

    validateProps<Group.OwnProps>(props);
    expose();

    return {
      filteredItems,
      notFoundLabel,
      rootComponent: computed(() => {
        switch (props.rootElement) {
          case "page-section":
            return PageSection;

          case "section":
            return Section;

          case "subsection":
            return Subsection;

          case undefined:
            return "div";
        }
      }),
      showNotFoundLabel: computed(() =>
        filteredItems.value.some(item => item.show)
          ? false
          : is.not.empty(notFoundLabel.value)
      )
    };
  }
});
</script>

<template>
  <keep-alive v-for="item in filteredItems" :key="item.id">
    <component
      v-bind="$attrs"
      :is="rootComponent"
      v-if="item.show"
      class="m-group"
    >
      <slot :name="item.id"></slot>
    </component>
  </keep-alive>
  <keep-alive>
    <component
      v-bind="$attrs"
      :is="rootComponent"
      v-if="showNotFoundLabel"
      v-debug-id="'not-found'"
      class="m-group m-group__not-found"
    >
      {{ notFoundLabel }}
    </component>
  </keep-alive>
</template>
