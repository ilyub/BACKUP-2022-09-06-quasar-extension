<script lang="ts">
import {
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiMenu
} from "@mdi/js";
import { Tooltip } from "./Tooltip.extras";
import { defineComponent } from "vue";
import { settings } from "./core";

export default defineComponent({
  name: "sample-tooltip",
  setup: () => {
    const { tooltipDelay, tooltipShow } = settings;

    return {
      lang: Tooltip.lang,
      lk: Tooltip.lang.keys,
      mdiArrowDown,
      mdiArrowLeft,
      mdiArrowRight,
      mdiArrowUp,
      mdiMenu,
      tooltipDelay,
      tooltipShow
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-subsection>
      <m-toggle v-model="tooltipShow" :label="lk.ShowTooltips" />
    </m-subsection>
    <m-subsection indent>
      {{ lang.withDelayOf }}
      <m-knob
        v-model="tooltipDelay"
        :disable="!tooltipShow"
        inline
        :max="3000"
        :step="100"
      />
      {{ lang.ms }}
    </m-subsection>
  </m-page-section>
  <m-page-section>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button :icon="mdiMenu">
          <m-menu>
            <q-list>
              <m-item :caption="lk.MenuItem" />
            </q-list>
          </m-menu>
          <m-tooltip>{{ lang.SampleTooltip }}</m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowDown">
          <m-tooltip>{{ lang.DownTooltip }}</m-tooltip>
        </m-icon-button>
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button :icon="mdiArrowDown">
          <m-tooltip direction="down">{{ lang.DownTooltip }}</m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowDown">
          <m-tooltip direction="down-left">
            {{ lang.DownLeftTooltip }}
          </m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowDown">
          <m-tooltip direction="down-right">
            {{ lang.DownRightTooltip }}
          </m-tooltip>
        </m-icon-button>
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button :icon="mdiArrowLeft">
          <m-tooltip direction="left">{{ lang.LeftTooltip }}</m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowLeft">
          <m-tooltip direction="left-down">
            {{ lang.LeftDownTooltip }}
          </m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowLeft">
          <m-tooltip direction="left-up">{{ lang.LeftUpTooltip }}</m-tooltip>
        </m-icon-button>
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button :icon="mdiArrowRight">
          <m-tooltip direction="right">{{ lang.RightTooltip }}</m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowRight">
          <m-tooltip direction="right-down">
            {{ lang.RightDownTooltip }}
          </m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowRight">
          <m-tooltip direction="right-up">{{ lang.RightUpTooltip }}</m-tooltip>
        </m-icon-button>
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button :icon="mdiArrowUp">
          <m-tooltip direction="up">{{ lang.UpTooltip }}</m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowUp">
          <m-tooltip direction="up-left">{{ lang.UpLeftTooltip }}</m-tooltip>
        </m-icon-button>
        <m-icon-button :icon="mdiArrowUp">
          <m-tooltip direction="up-right">{{ lang.UpRightTooltip }}</m-tooltip>
        </m-icon-button>
      </m-icon-buttons-group>
    </m-subsection>
  </m-page-section>
</template>
