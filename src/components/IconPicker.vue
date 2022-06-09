<script lang="ts">
import { IconPicker } from "./IconPicker.extras";
import {
  directives,
  parentProps,
  prop,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { handlePromise, inlineSearch, testDelay } from "@skylib/facades";
import { assert, is, o, typedef } from "@skylib/functions";
import * as _ from "@skylib/lodash-commonjs-es";
import { computed, defineComponent, ref, watch } from "vue";
import type { IconButton } from "./IconButton.extras";
import type { lang } from "@skylib/facades";
import type { Writable, stringU } from "@skylib/functions";

const mdi = ref<Mdi>();

interface Button {
  readonly icon?: string;
  readonly placeholder: boolean;
  readonly selected: boolean;
  readonly tooltip?: lang.Key;
}

type Buttons = readonly Button[];

interface Item {
  readonly description: string;
  readonly id: keyof Mdi;
}

type Mdi = typeof import("@mdi/js-dynamic");

export default defineComponent({
  name: "m-icon-picker",
  directives: { debugId: directives.debugId("icon-picker") },
  props: {
    ...parentProps<IconPicker.ParentProps>(),
    modelValue: prop<IconPicker.Props["modelValue"]>(),
    placeholder: prop.required<IconPicker.Props["placeholder"]>()
  },
  emits: { "update:modelValue": (value: stringU) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<IconPicker.OwnProps>(emit);
    validateProps<IconPicker.OwnProps>(props);

    const filteredItems = computed(() =>
      is.not.empty(searchString.value)
        ? searchIndex.value.search(searchString.value)
        : items.value
    );

    const from = computed(() => page.value * pageSize.value + 1);

    const searchIndex = computed(() =>
      inlineSearch.create<Item>("id", ["description"], items.value)
    );

    const settings = IconPicker.injectSettings();

    const items = computed(() =>
      mdi.value
        ? o
            .keys(mdi.value)
            .filter(id => id.startsWith("mdi"))
            .map((id): Item => {
              return { description: _.kebabCase(id), id };
            })
        : []
    );

    const page = ref(0);

    const pageSize = computed(() => settings.value.cols * settings.value.rows);

    const searchString = ref<string>();

    const show = ref(false);

    const to = computed(() =>
      Math.min(page.value * pageSize.value + pageSize.value, total.value)
    );

    const total = computed(() => filteredItems.value.length);

    watch([mdi, searchString], resetPage);

    return {
      click: (): void => {
        show.value = true;
        resetPage();
        handlePromise.silent(load);

        async function load(): Promise<void> {
          await testDelay();
          mdi.value = await import(
            /* webpackChunkName: "dynamic/quasar-extension/mdi" */
            "@mdi/js-dynamic"
          );
        }
      },
      contents: computed(() => {
        const buttons: Writable<Buttons> = filteredItems.value
          .slice(
            page.value * pageSize.value,
            page.value * pageSize.value + pageSize.value
          )
          .map(item => {
            assert.not.empty(mdi.value);

            const icon = mdi.value[item.id];

            return o.removeUndefinedKeys({
              icon,
              placeholder: false,
              selected: icon === props.modelValue,
              tooltip: settings.value.iconTooltips
                ? typedef<lang.Key>(`plain:${item.description}`)
                : undefined
            });
          });

        while (buttons.length < pageSize.value)
          buttons.push({ placeholder: true, selected: false });

        return _.chunk(buttons, settings.value.cols);
      }),
      from,
      icon: computed(() => props.modelValue ?? props.placeholder),
      icons: IconPicker.icons,
      lang: IconPicker.lang,
      loading: computed(() => is.empty(mdi.value)),
      main: ref<IconButton.Global>(),
      nextClick: (): void => {
        page.value++;
      },
      nextDisable: computed(() => to.value >= total.value),
      notFound: computed(() => total.value === 0),
      notSelected: computed(() => is.empty(props.modelValue)),
      pickIcon: (icon: stringU): void => {
        emit("update:modelValue", icon === props.modelValue ? undefined : icon);
        show.value = false;
      },
      prevClick: (): void => {
        page.value--;
      },
      prevDisable: computed(() => from.value <= 1),
      searchString,
      settings,
      show,
      to,
      total
    };

    function resetPage(): void {
      const value = props.modelValue;

      const values = mdi.value;

      const index =
        is.not.empty(value) && is.not.empty(values)
          ? filteredItems.value.findIndex(item => values[item.id] === value)
          : -1;

      page.value = index === -1 ? 0 : Math.floor(index / pageSize.value);
    }
  }
});
</script>

<template>
  <m-icon-button
    ref="main"
    class="m-icon-picker"
    :class="{ 'text-grey-5': notSelected }"
    :icon="icon"
    @click="click"
  >
    <q-dialog v-model="show">
      <m-card v-debug-id="'dialog'" :title="lang.IconPicker" transparent-header>
        <m-card-section>
          <m-subsection>
            <m-input v-model="searchString" v-debug-id="'search'" />
          </m-subsection>
          <m-subsection class="relative-position">
            <div
              v-if="loading"
              v-debug-id="'loading'"
              class="absolute fit items-center justify-center row"
            >
              <q-spinner color="primary" :size="settings.spinnerSize" />
            </div>
            <div v-for="(buttons, i) in contents" :key="i">
              <m-icon-button
                v-for="(button, j) in buttons"
                :key="j"
                v-debug-id="'pick-icon'"
                :class="{
                  'bg-primary text-white': button.selected,
                  'invisible': button.placeholder
                }"
                :disable="button.placeholder"
                :icon="button.icon"
                :tooltip="button.tooltip"
                @click="pickIcon(button.icon)"
              />
            </div>
          </m-subsection>
        </m-card-section>
        <m-card-actions>
          <m-icon-button
            v-debug-id="'prev'"
            :disable="prevDisable"
            :icon="icons.chevronLeft"
            @click="prevClick"
          />
          <q-space />
          <span
            v-debug-id="'pagination'"
            :class="{ invisible: loading || notFound }"
          >
            {{ from }} &ndash; {{ to }} {{ lang.of }} {{ total }}
          </span>
          <q-space />
          <m-icon-button
            v-debug-id="'next'"
            :disable="nextDisable"
            :icon="icons.chevronRight"
            @click="nextClick"
          />
        </m-card-actions>
      </m-card>
    </q-dialog>
  </m-icon-button>
</template>
