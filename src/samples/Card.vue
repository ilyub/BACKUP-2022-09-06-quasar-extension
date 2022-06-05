<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "sample-card" });
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-button>
        No title
        <m-menu direction="down-right">
          <m-card min-width="300px">
            <m-card-section>Section</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button>Submit</m-form-button>
              <m-form-button>Reset</m-form-button>
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
      <m-button>
        Title
        <m-menu direction="down-right">
          <m-card min-width="300px" title="Title">
            <m-card-section>Section</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button>Submit</m-form-button>
              <m-form-button>Reset</m-form-button>
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
      <m-button>
        Title - transparent
        <m-menu direction="down-right">
          <m-card min-width="300px" title="Title" transparent-header>
            <m-card-section>Section</m-card-section>
            <m-card-actions>
              <q-space />
              <m-form-button>Submit</m-form-button>
              <m-form-button>Reset</m-form-button>
            </m-card-actions>
          </m-card>
        </m-menu>
      </m-button>
    </m-buttons-group>
  </m-page-section>
</template>
