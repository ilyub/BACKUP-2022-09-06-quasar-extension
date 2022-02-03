<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import { Notify } from "quasar";
import { computed, defineComponent, ref } from "vue";
import {
  mdiAccount,
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiImageEdit,
  mdiImageEditOutline,
  mdiMenu,
  mdiPen
} from "@mdi/js";

import { datetime } from "@skylib/facades/es/datetime";
import { lang } from "@skylib/facades/es/lang";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import * as a from "@skylib/functions/es/array";
import * as fn from "@skylib/functions/es/function";
import * as json from "@skylib/functions/es/json";
import type { NumStrU, stringU } from "@skylib/functions/es/types/core";
import type { LocaleName } from "@skylib/functions/es/types/locales";

import { providePageOffset } from "./components/api/pageContentHeight";
import XButton from "./components/XButton.vue";
import XDatetimePicker from "./components/XDatetimePicker.vue";
import XDroppable from "./components/XDroppable.vue";
import XFormButton from "./components/XFormButton.vue";
import type { GroupItems } from "./components/XGroup.extras";
import XGroup from "./components/XGroup.vue";
import XIconButton from "./components/XIconButton.vue";
import { provideIconPickerSettings } from "./components/XIconPicker.extras";
import XIconPicker from "./components/XIconPicker.vue";
import XInput from "./components/XInput.vue";
import XKnob from "./components/XKnob.vue";
import { provideLanguagePickerSettings } from "./components/XLanguagePicker.extras";
import XLanguagePicker from "./components/XLanguagePicker.vue";
import XMenu from "./components/XMenu.vue";
import XMenuItem from "./components/XMenuItem.vue";
import XNumericInput from "./components/XNumericInput.vue";
import { providePageLayoutSettings } from "./components/XPageLayout.extras";
import XPageLayout from "./components/XPageLayout.vue";
import XPageMarkupTable from "./components/XPageMarkupTable.vue";
import type { Columns } from "./components/XPageTable.extras";
import XPageTable from "./components/XPageTable.vue";
import XResizer from "./components/XResizer.vue";
import type { SelectOptions } from "./components/XSelect.extras";
import XSelect from "./components/XSelect.vue";
import XSortable from "./components/XSortable.vue";
import { provideTooltipSettings } from "./components/XTooltip.extras";
import XTooltip from "./components/XTooltip.vue";

interface TableItem {
  readonly id: number;
  readonly name: string;
}

type TableItems = readonly TableItem[];

export default defineComponent({
  name: "app",
  components: {
    "x-button": XButton,
    "x-datetime-picker": XDatetimePicker,
    "x-droppable": XDroppable,
    "x-form-button": XFormButton,
    "x-group": XGroup,
    "x-icon-button": XIconButton,
    "x-icon-picker": XIconPicker,
    "x-input": XInput,
    "x-knob": XKnob,
    "x-language-picker": XLanguagePicker,
    "x-menu": XMenu,
    "x-menu-item": XMenuItem,
    "x-numeric-input": XNumericInput,
    "x-page-layout": XPageLayout,
    "x-page-markup-table": XPageMarkupTable,
    "x-page-table": XPageTable,
    "x-resizer": XResizer,
    "x-select": XSelect,
    "x-sortable": XSortable,
    "x-tooltip": XTooltip
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

    provideIconPickerSettings(() => {
      return {
        iconTooltips: iconTooltips.value
      };
    });

    provideLanguagePickerSettings(() => {
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
    });

    providePageLayoutSettings(() => {
      return {
        closeButton: false,
        headerHeight: "50px",
        paddingX: "5px",
        paddingY: "15px",
        sectionMargin: "10px"
      };
    });

    providePageOffset(() => "20px");

    provideTooltipSettings(() => {
      return {
        delay: tooltipDelay.value,
        show: tooltipShow.value
      };
    });

    return {
      datetimeMax: datetime
        .create()
        .add(3, "days")
        .setHours(14)
        .setMinutes(30)
        .toString(),
      datetimeMin: datetime
        .create()
        .sub(3, "days")
        .setHours(9)
        .setMinutes(30)
        .toString(),
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
      mdiImageEdit,
      mdiImageEditOutline,
      mdiMenu,
      mdiPen,
      numericInputValue: ref(0),
      pageTableColumns: fn.run<Columns<TableItem>>(() => [
        {
          align: "left",
          field(row): string {
            return `${row.name}!`;
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
            name: `Item ${id}`
          };
        })
      ),
      pageTableSelected: ref<TableItems>([]),
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
  <table class="wrapper">
    <tr>
      <td>Button</td>
      <td>
        <x-button tooltip="Down tooltip">Down tooltip</x-button>
        <x-button tooltip="Down tooltip" tooltip-direction="down">
          Down tooltip
        </x-button>
        <x-button tooltip="Left tooltip" tooltip-direction="left">
          Left tooltip
        </x-button>
        <x-button tooltip="Right tooltip" tooltip-direction="right">
          Right tooltip
        </x-button>
        <x-button tooltip="Up tooltip" tooltip-direction="up">
          Up tooltip
        </x-button>
      </td>
    </tr>
    <tr>
      <td>Date/time picker</td>
      <td>
        <x-datetime-picker
          v-model="datetimeValue"
          clearable
          :max="datetimeMax"
          :min="datetimeMin"
        />
      </td>
    </tr>
    <tr>
      <td>Droppable</td>
      <td>
        <x-sortable
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
            <x-tooltip>Sample tooltip</x-tooltip>
          </template>
        </x-sortable>
        <x-sortable
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
            <x-tooltip>Sample tooltip</x-tooltip>
          </template>
        </x-sortable>
        <x-droppable
          class="droppable q-mt-md"
          group="droppable"
          @dropped="dropped"
        >
          D
        </x-droppable>
      </td>
    </tr>
    <tr>
      <td>Form button</td>
      <td>
        <x-form-button tooltip="Down tooltip">Down tooltip</x-form-button>
        <x-form-button tooltip="Down tooltip" tooltip-direction="down">
          Down tooltip
        </x-form-button>
        <x-form-button tooltip="Left tooltip" tooltip-direction="left">
          Left tooltip
        </x-form-button>
        <x-form-button tooltip="Right tooltip" tooltip-direction="right">
          Right tooltip
        </x-form-button>
        <x-form-button tooltip="Up tooltip" tooltip-direction="up">
          Up tooltip
        </x-form-button>
      </td>
    </tr>
    <tr>
      <td>Group</td>
      <td>
        <x-input v-model="searchString" label="Search for settings" />
        <div class="q-mt-md">
          Show
          <q-checkbox v-model="showSection1" /> 1
          <q-checkbox v-model="showSection2" /> 2
          <q-checkbox v-model="showSection3" /> 3
          <q-checkbox v-model="showSection4" /> 4
        </div>
        <x-group
          class="q-mt-lg"
          :items="groupItems"
          not-found-label="No results found"
          :search-string="searchString"
        >
          <template #section2>Section 2</template>
          <template #section1>Section 1</template>
          <template #section3>Section 11</template>
          <template #section4>Section 12</template>
        </x-group>
      </td>
    </tr>
    <tr>
      <td>Icon picker</td>
      <td>
        <x-icon-picker v-model="icon1" :placeholder="mdiImageEdit" />
        <x-icon-picker
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
        <x-input v-model="inputValue1" />
        <x-input v-model="inputValue2" clearable />
      </td>
    </tr>
    <tr>
      <td>Knob</td>
      <td>
        <x-knob v-model="knobValue" :max="1000" :step="10" />
      </td>
    </tr>
    <tr>
      <td>Language picker</td>
      <td class="flex items-center">
        <x-language-picker :language="language" />
        {{ lang.SampleWord }}
      </td>
    </tr>
    <tr>
      <td>Menu item</td>
      <td>
        <x-icon-button :icon="mdiAccount">
          <x-menu>
            <q-list>
              <x-menu-item caption="Settings" :icon="mdiPen" />
              <x-menu-item caption="Language">
                <template #icon>
                  <img alt="Alt text" height="18" :src="us" width="18" />
                </template>
              </x-menu-item>
              <q-separator />
              <x-menu-item caption="Exit" />
            </q-list>
          </x-menu>
        </x-icon-button>
      </td>
    </tr>
    <tr>
      <td>Icon button</td>
      <td>
        <x-icon-button :icon="mdiArrowDown" tooltip="Down tooltip" />
        <x-icon-button
          :icon="mdiArrowDown"
          tooltip="Down tooltip"
          tooltip-direction="down"
        />
        <x-icon-button
          :icon="mdiArrowLeft"
          tooltip="Left tooltip"
          tooltip-direction="left"
        />
        <x-icon-button
          :icon="mdiArrowRight"
          tooltip="Right tooltip"
          tooltip-direction="right"
        />
        <x-icon-button
          :icon="mdiArrowUp"
          tooltip="Up tooltip"
          tooltip-direction="up"
        />
        <x-icon-button>
          <img alt="Alt text" height="20" :src="us" width="20" />
        </x-icon-button>
      </td>
    </tr>
    <tr>
      <td>Numeric input</td>
      <td>
        <x-numeric-input v-model="numericInputValue" />
      </td>
    </tr>
    <tr>
      <td>Page layout</td>
      <td>
        <x-page-layout class="page-layout">
          <div class="page-section">Section 1</div>
          <div class="page-section">Section 2</div>
          <div class="page-section">Section 3</div>
        </x-page-layout>
        <x-page-layout class="page-layout q-mt-md" title="Title">
          <div class="page-section">Section 1</div>
          <div class="page-section">Section 2</div>
          <div class="page-section">Section 3</div>
        </x-page-layout>
        <x-page-layout class="page-layout q-mt-md" close-button title="Title">
          <div class="page-section">Section 1</div>
          <div class="page-section">Section 2</div>
          <div class="page-section">Section 3</div>
        </x-page-layout>
      </td>
    </tr>
    <tr>
      <td>Page markup table</td>
      <td>
        <x-page-layout class="page-layout">
          <x-page-markup-table class="page-markup-table" flat>
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
          </x-page-markup-table>
        </x-page-layout>
      </td>
    </tr>
    <tr>
      <td>Page table</td>
      <td>
        {{ pageTableSelected }}
        <x-page-layout class="page-layout" title="Title">
          <x-page-table
            v-model:limit="pageTableLimit"
            v-model:selected="pageTableSelected"
            class="page-table"
            :columns="pageTableColumns"
            flat
            :rows="pageTableRows"
            selection="multiple"
          >
            <template #body-cell="{ row, value }">
              <q-td>{{ value }} {{ row }}</q-td>
            </template>
          </x-page-table>
        </x-page-layout>
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
          <x-resizer
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
        <x-select v-model="selectValue" :options="selectOptions" />
      </td>
    </tr>
    <tr>
      <td>Sortable</td>
      <td>
        <x-sortable
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
            <x-tooltip>Sample tooltip</x-tooltip>
          </template>
        </x-sortable>
        <x-sortable
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
            <x-tooltip>Sample tooltip</x-tooltip>
          </template>
        </x-sortable>
      </td>
    </tr>
    <tr>
      <td>Tooltip</td>
      <td>
        <div>
          Show tooltips:
          <q-toggle v-model="tooltipShow" />
          with delay of
          <x-knob
            v-model="tooltipDelay"
            class="q-ml-sm q-mr-sm"
            :disable="!tooltipShow"
            :max="3000"
            :step="100"
          />
          ms
        </div>
        <div>
          <x-icon-button :icon="mdiMenu">
            <x-menu>
              <q-list>
                <x-menu-item caption="Menu item" />
              </q-list>
            </x-menu>
            <x-tooltip>Sample tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowDown">
            <x-tooltip>Down tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowDown">
            <x-tooltip direction="down">Down tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowDown">
            <x-tooltip direction="down-left">Down-left tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowDown">
            <x-tooltip direction="down-right">Down-right tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowLeft">
            <x-tooltip direction="left">Left tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowLeft">
            <x-tooltip direction="left-down">Left-down tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowLeft">
            <x-tooltip direction="left-up">Left-up tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowRight">
            <x-tooltip direction="right">Right tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowRight">
            <x-tooltip direction="right-down">Right-down tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowRight">
            <x-tooltip direction="right-up">Right-up tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowUp">
            <x-tooltip direction="up">Up tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowUp">
            <x-tooltip direction="up-left">Up-left tooltip</x-tooltip>
          </x-icon-button>
          <x-icon-button :icon="mdiArrowUp">
            <x-tooltip direction="up-right">Up-right tooltip</x-tooltip>
          </x-icon-button>
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
  border: 1px solid red;
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

.page-markup-table {
  border: 1px solid blue;
}

.page-table {
  border: 1px solid blue;
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
  margin: 50px 50px 100px;
}
</style>
