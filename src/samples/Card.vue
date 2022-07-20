<script lang="ts">
import { Card } from "./Card.extras";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-card",
  setup: (_prop, { expose }) => {
    const { lang } = Card;

    const lk = lang.keys;

    expose({});

    return { lang, lk };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-button :label="lk.WithTitle">
        <m-menu direction="down-right">
          <m-card min-width="300px" :title="lk.Title">
            <m-card-section>{{ lang.Section }}</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button :label="lk.Submit" />
              <m-form-button :label="lk.Reset" />
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
      <m-button :label="lk.WithTransparentTitle">
        <m-menu direction="down-right">
          <m-card min-width="300px" :title="lk.Title" transparent-header>
            <m-card-section>{{ lang.Section }}</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button :label="lk.Submit" />
              <m-form-button :label="lk.Reset" />
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
      <m-button :label="lk.WithoutTitle">
        <m-menu direction="down-right">
          <m-card min-width="300px">
            <m-card-section>{{ lang.Section }}</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button :label="lk.Submit" />
              <m-form-button :label="lk.Reset" />
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
    </m-buttons-group>
  </m-page-section>
</template>
