<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import { Notify } from "quasar";
import { computed, defineComponent, provide, ref } from "vue";
import {
  mdiAccount,
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiClose,
  mdiImageEdit,
  mdiImageEditOutline,
  mdiMenu,
  mdiPen
} from "@mdi/js";

import { lang } from "@skylib/facades/es/lang";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import * as a from "@skylib/functions/es/array";
import * as fn from "@skylib/functions/es/function";
import * as json from "@skylib/functions/es/json";
import type {
  numberU,
  NumStrU,
  stringU
} from "@skylib/functions/es/types/core";
import type { LocaleName } from "@skylib/functions/es/types/locales";

import { injectPageOffset } from "./components/api/injections";
import DatetimePicker from "./components/DatetimePicker.vue";
import Droppable from "./components/Droppable.vue";
import type { Columns } from "./components/extras/Table";
import type { GroupItems } from "./components/Group.extras";
import Group from "./components/Group.vue";
import type { IconPickerSettings } from "./components/IconPicker.extras";
import { injectIconPickerSettings } from "./components/IconPicker.extras";
import IconPicker from "./components/IconPicker.vue";
import Input from "./components/Input.vue";
import Knob from "./components/Knob.vue";
import type { LanguagePickerSettings } from "./components/LanguagePicker.extras";
import { injectLanguagePickerSettings } from "./components/LanguagePicker.extras";
import LanguagePicker from "./components/LanguagePicker.vue";
import Menu from "./components/Menu.vue";
import MenuItem from "./components/MenuItem.vue";
import NavButton from "./components/NavButton.vue";
import type { PageLayoutSettings } from "./components/PageLayout.extras";
import { injectPageLayoutSettings } from "./components/PageLayout.extras";
import PageLayout from "./components/PageLayout.vue";
import PageMarkupTable from "./components/PageMarkupTable.vue";
import PageTable from "./components/PageTable.vue";
import Resizer from "./components/Resizer.vue";
import type { SelectOptions } from "./components/Select.extras";
import Select from "./components/Select.vue";
import Sortable from "./components/Sortable.vue";
import type { TooltipSettings } from "./components/Tooltip.extras";
import { injectTooltipSettings } from "./components/Tooltip.extras";
import Tooltip from "./components/Tooltip.vue";

interface TableItem {
  readonly id: number;
  readonly name: string;
}

type TableItems = readonly TableItem[];

export default defineComponent({
  name: "app",
  components: {
    "s-datetime-picker": DatetimePicker,
    "s-droppable": Droppable,
    "s-group": Group,
    "s-icon-picker": IconPicker,
    "s-input": Input,
    "s-knob": Knob,
    "s-language-picker": LanguagePicker,
    "s-menu": Menu,
    "s-menu-item": MenuItem,
    "s-nav-button": NavButton,
    "s-page-layout": PageLayout,
    "s-page-markup-table": PageMarkupTable,
    "s-page-table": PageTable,
    "s-resizer": Resizer,
    "s-select": Select,
    "s-sortable": Sortable,
    "s-tooltip": Tooltip
  },
  setup() {
    const iconTooltips = ref(false);

    const language = ref<LocaleName>("en-US");

    const pageTableLimit = ref(20);

    const showSection1 = ref(true);

    const showSection2 = ref(true);

    const showSection3 = ref(true);

    const showSection4 = ref(true);

    const tooltipDelay = ref(1000);

    const tooltipShow = ref(true);

    provide(
      injectIconPickerSettings,
      computed<IconPickerSettings>(() => {
        return {
          iconTooltips: iconTooltips.value
        };
      })
    );

    provide(
      injectLanguagePickerSettings,
      computed<LanguagePickerSettings>(() => {
        return {
          changeLanguageAction(value): void {
            language.value = value;
            Dictionary.configure({ localeName: value });
          },
          items: [
            {
              caption: "English (USA)",
              flag: us,
              lang: "en-US"
            },
            {
              caption: "Russian",
              flag: ru,
              lang: "ru-RU"
            }
          ]
        };
      })
    );

    provide(
      injectPageLayoutSettings,
      computed<PageLayoutSettings>(() => {
        return {
          closeButton: false,
          headerHeight: "50px",
          paddingX: "5px",
          paddingY: "15px",
          sectionMargin: "10px"
        };
      })
    );

    provide(
      injectPageOffset,
      computed<numberU>(() => 0)
    );

    provide(
      injectTooltipSettings,
      computed<TooltipSettings>(() => {
        return {
          delay: tooltipDelay.value,
          show: tooltipShow.value
        };
      })
    );

    return {
      datetimeValue: ref<stringU>(undefined),
      dropped(item: unknown, group: unknown): void {
        Notify.create(json.encode({ group, item }));
      },
      groupItems: computed<GroupItems>(() => [
        {
          id: "section2",
          show: showSection2.value,
          title: "Section 2 bbb ccc"
        },
        {
          id: "section1",
          show: showSection1.value,
          title: "Section 1 aaa bbb"
        },
        {
          id: "section3",
          show: showSection3.value,
          title: "Section 11 ccc ddd"
        },
        {
          id: "section4",
          show: showSection4.value,
          title: "Section 12 ddd eee"
        }
      ]),
      icon1: ref<stringU>(undefined),
      icon2: ref<stringU>(undefined),
      iconTooltips,
      inputValue1: ref<stringU>(undefined),
      inputValue2: ref<stringU>(undefined),
      knobValue: ref(100),
      lang,
      language,
      mdiAccount,
      mdiArrowDown,
      mdiArrowLeft,
      mdiArrowRight,
      mdiArrowUp,
      mdiClose,
      mdiImageEdit,
      mdiImageEditOutline,
      mdiMenu,
      mdiPen,
      pageTableColumns: fn.run<Columns<TableItem>>(() => [
        {
          align: "left",
          field(row): string {
            return row.name;
          },
          label: "Name",
          name: "name"
        }
      ]),
      pageTableLimit,
      pageTableRows: computed<TableItems>(() =>
        a.fromRange(1, pageTableLimit.value).map(id => {
          return {
            id,
            name: `Item ${id + 1}`
          };
        })
      ),
      resizerShow: ref(true),
      resizerWidth: ref(200),
      searchString: ref<stringU>(undefined),
      selectOptions: fn.run<SelectOptions>(() => [
        { label: "Select option", value: undefined },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        { disable: true, label: "Option 3", value: "b" }
      ]),
      selectValue: ref<NumStrU>(undefined),
      showSection1,
      showSection2,
      showSection3,
      showSection4,
      sortable1: ref([
        { id: "a", name: "A" },
        { id: "b", name: "B" },
        { id: "c", name: "C" }
      ]),
      sortable2: ref([]),
      tooltipDelay,
      tooltipShow,
      us
    };
  }
});
</script>

<template>
  <table class="q-ma-lg wrapper">
    <tr>
      <td>Date/time picker</td>
      <td>
        <s-datetime-picker v-model="datetimeValue" reset-button />
      </td>
    </tr>
    <tr>
      <td>Droppable</td>
      <td>
        <s-sortable
          v-model="sortable1"
          class="sortable"
          group="sortable"
          :item-component-data="{
            class: 'q-mr-sm sortable-item'
          }"
          item-key="id"
        >
          <template #item="{ item }">
            {{ item.name }}
            <s-tooltip>Sample tooltip</s-tooltip>
          </template>
        </s-sortable>
        <s-sortable
          v-model="sortable2"
          class="q-mt-md sortable"
          group="sortable"
          :item-component-data="{
            class: 'q-mr-sm sortable-item'
          }"
          item-key="id"
        >
          <template #item="{ item }">
            {{ item.name }}
            <s-tooltip>Sample tooltip</s-tooltip>
          </template>
        </s-sortable>
        <s-droppable
          class="droppable q-mt-md"
          group="droppable"
          @dropped="dropped"
        >
          D
        </s-droppable>
      </td>
    </tr>
    <tr>
      <td>Group</td>
      <td>
        <s-input v-model="searchString" label="Search for settings" />
        <div class="q-mt-md">
          Show
          <q-checkbox v-model="showSection1" /> 1
          <q-checkbox v-model="showSection2" /> 2
          <q-checkbox v-model="showSection3" /> 3
          <q-checkbox v-model="showSection4" /> 4
        </div>
        <s-group
          class="q-mt-lg"
          :items="groupItems"
          not-found-label="No results found"
          :search-string="searchString"
        >
          <template #section2>Section 2</template>
          <template #section1>Section 1</template>
          <template #section3>Section 11</template>
          <template #section4>Section 12</template>
        </s-group>
      </td>
    </tr>
    <tr>
      <td>Icon picker</td>
      <td>
        <s-icon-picker v-model="icon1" :placeholder="mdiImageEdit" />
        <s-icon-picker
          v-model="icon2"
          :cols="2"
          :placeholder="mdiImageEditOutline"
          :rows="1"
          spinner-size="30px"
        />
        co = 2, rest = 5
        <q-checkbox
          v-model="iconTooltips"
          class="q-ml-md"
          label="Icon tooltips"
        />
      </td>
    </tr>
    <tr>
      <td>Input</td>
      <td>
        <s-input v-model="inputValue1" />
        <s-input v-model="inputValue2" reset-button />
      </td>
    </tr>
    <tr>
      <td>Knob</td>
      <td>
        <s-knob v-model="knobValue" :max="1000" :step="10" />
      </td>
    </tr>
    <tr>
      <td>Language picker</td>
      <td class="flex items-center">
        <s-language-picker :language="language" />
        {{ lang.SampleWord }}
      </td>
    </tr>
    <tr>
      <td>Menu item</td>
      <td>
        <s-nav-button :icon="mdiAccount">
          <s-menu>
            <q-list>
              <s-menu-item caption="Settings" :icon="mdiPen" />
              <s-menu-item caption="Language">
                <template #icon>
                  <img alt="Alt text" height="18" :src="us" width="18" />
                </template>
              </s-menu-item>
              <q-separator />
              <s-menu-item caption="Exit" />
            </q-list>
          </s-menu>
        </s-nav-button>
      </td>
    </tr>
    <tr>
      <td>Nav button</td>
      <td>
        <s-nav-button :icon="mdiArrowDown" tooltip="Down tooltip" />
        <s-nav-button
          :icon="mdiArrowDown"
          tooltip="Down tooltip"
          tooltip-direction="down"
        />
        <s-nav-button
          :icon="mdiArrowLeft"
          tooltip="Left tooltip"
          tooltip-direction="left"
        />
        <s-nav-button
          :icon="mdiArrowRight"
          tooltip="Right tooltip"
          tooltip-direction="right"
        />
        <s-nav-button
          :icon="mdiArrowUp"
          tooltip="Up tooltip"
          tooltip-direction="up"
        />
        <s-nav-button>
          <img alt="Alt text" height="20" :src="us" width="20" />
        </s-nav-button>
      </td>
    </tr>
    <tr>
      <td>Page layout</td>
      <td>
        <s-page-layout class="page-layout">
          <div class="page-section">Section 1</div>
          <div class="page-section">Section 2</div>
          <div class="page-section">Section 3</div>
        </s-page-layout>
        <s-page-layout class="page-layout q-mt-md" title="Sample-title">
          <div class="page-section">Section 1</div>
          <div class="page-section">Section 2</div>
          <div class="page-section">Section 3</div>
        </s-page-layout>
        <s-page-layout
          class="page-layout q-mt-md"
          close-button
          title="Sample-title"
        >
          <div class="page-section">Section 1</div>
          <div class="page-section">Section 2</div>
          <div class="page-section">Section 3</div>
        </s-page-layout>
      </td>
    </tr>
    <tr>
      <td>Page markup table</td>
      <td>
        <s-page-markup-table flat>
          <thead>
            <tr>
              <th v-for="row in 3" :key="row">H:{{ row }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="col in 20" :key="col">
              <td v-for="row in 3" :key="row">{{ col }}:{{ row }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th v-for="row in 3" :key="row">F:{{ row }}</th>
            </tr>
          </tfoot>
        </s-page-markup-table>
      </td>
    </tr>
    <tr>
      <td>Page table</td>
      <td>
        <s-page-table
          v-model:limit="pageTableLimit"
          :columns="pageTableColumns"
          flat
          :rows="pageTableRows"
        />
      </td>
    </tr>
    <tr>
      <td>Resizer</td>
      <td>
        <q-toggle v-model="resizerShow" />
        <div
          class="q-mt-sm resizer"
          :style="{
            width: `${resizerWidth}px`
          }"
        >
          <s-resizer
            v-show="resizerShow"
            v-model="resizerWidth"
            :max="300"
            :min="100"
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>Select</td>
      <td>
        <s-select v-model="selectValue" :options="selectOptions" />
      </td>
    </tr>
    <tr>
      <td>Sortable</td>
      <td>
        <s-sortable
          v-model="sortable1"
          class="sortable"
          group="sortable"
          :item-component-data="{
            class: 'q-mr-sm sortable-item'
          }"
          item-key="id"
        >
          <template #item="{ item }">
            {{ item.name }}
            <s-tooltip>Sample tooltip</s-tooltip>
          </template>
        </s-sortable>
        <s-sortable
          v-model="sortable2"
          class="q-mt-md sortable"
          group="sortable"
          :item-component-data="{
            class: 'q-mr-sm sortable-item'
          }"
          item-key="id"
        >
          <template #item="{ item }">
            {{ item.name }}
            <s-tooltip>Sample tooltip</s-tooltip>
          </template>
        </s-sortable>
      </td>
    </tr>
    <tr>
      <td>Tooltip</td>
      <td>
        <div>
          Show tooltips:
          <q-toggle v-model="tooltipShow" />
          with delay of
          <s-knob
            v-model="tooltipDelay"
            class="q-ml-sm q-mr-sm"
            :disable="!tooltipShow"
            :max="3000"
            :step="100"
          />
          ms
        </div>
        <div>
          <s-nav-button :icon="mdiMenu">
            <s-menu>
              <q-list>
                <s-menu-item caption="Menu item" />
              </q-list>
            </s-menu>
            <s-tooltip>Sample tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowDown">
            <s-tooltip>Down tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowDown">
            <s-tooltip direction="down">Down tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowDown">
            <s-tooltip direction="down-left">Down-left tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowDown">
            <s-tooltip direction="down-right">Down-right tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowLeft">
            <s-tooltip direction="left">Left tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowLeft">
            <s-tooltip direction="left-down">Left-down tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowLeft">
            <s-tooltip direction="left-up">Left-up tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowRight">
            <s-tooltip direction="right">Right tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowRight">
            <s-tooltip direction="right-down">Right-down tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowRight">
            <s-tooltip direction="right-up">Right-up tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowUp">
            <s-tooltip direction="up">Up tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowUp">
            <s-tooltip direction="up-left">Up-left tooltip</s-tooltip>
          </s-nav-button>
          <s-nav-button :icon="mdiArrowUp">
            <s-tooltip direction="up-right">Up-right tooltip</s-tooltip>
          </s-nav-button>
        </div>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use "sass:map";

table {
  border-collapse: collapse;

  td {
    padding: 10px;
    border: 1px solid $grey-3;
  }
}

.droppable {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: $grey-5;
}

.page-layout {
  border: 1px solid $grey-3;
}

.page-section {
  padding: map.get($space-sm, "y") map.get($space-sm, "x");
  background: $grey-3;
}

.resizer {
  position: relative;
  height: 50px;
  background: blue;
}

.sortable {
  height: 50px;
  background: $grey-3;

  :deep(.sortable-item) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: $grey-5;
    cursor: default;
  }
}

.wrapper {
  margin-bottom: 100px;
}
</style>
