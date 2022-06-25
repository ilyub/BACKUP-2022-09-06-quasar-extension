<script lang="ts">
import PageSection from "./PageSection.vue";
import Section from "./Section.vue";
import Subsection from "./Subsection.vue";
import { directives, plugins, propFactory, validateProps } from "./api";
import { compare, inlineSearch, lang } from "@skylib/facades";
import { a, is } from "@skylib/functions";
import { computed, defineComponent } from "vue";
import type { Group } from "./Group.extras";

const prop = propFactory<Group.OwnProps>();

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
  setup: props => {
    const filteredItems = computed(() => {
      if (is.not.empty(props.searchString)) {
        const ids = new Set(
          searchIndex.value.search(props.searchString).map(item => item.id)
        );

        return searchIndex.value.search(props.searchString).map(item => {
          return { ...item, show: item.show && ids.has(item.id) };
        });
      }

      return sortedItems.value;
    });

    const items = computed(() =>
      props.items.map(item => {
        return { ...item, title: lang.get(item.title) };
      })
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
