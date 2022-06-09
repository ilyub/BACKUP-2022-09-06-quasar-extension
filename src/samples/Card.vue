<script lang="ts">
import { Card } from "./Card.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-card",
  setup: () => {
    return { lang: Card.lang, lk: Card.lang.keys };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-button>
        {{ lang.NoTitle }}
        <m-menu direction="down-right">
          <m-card min-width="300px">
            <m-card-section>{{ lang.Section }}</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button>{{ lang.Submit }}</m-form-button>
              <m-form-button>{{ lang.Reset }}</m-form-button>
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
      <m-button>
        {{ lang.Title }}
        <m-menu direction="down-right">
          <m-card min-width="300px" :title="lk.Title">
            <m-card-section>{{ lang.Section }}</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button>{{ lang.Submit }}</m-form-button>
              <m-form-button>{{ lang.Reset }}</m-form-button>
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
      <m-button>
        {{ lang.TransparentTitle }}
        <m-menu direction="down-right">
          <m-card min-width="300px" :title="lk.Title" transparent-header>
            <m-card-section>{{ lang.Section }}</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button>{{ lang.Submit }}</m-form-button>
              <m-form-button>{{ lang.Reset }}</m-form-button>
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
    </m-buttons-group>
  </m-page-section>
</template>
