/**
 * Returns ESLint options.
 *
 * @param importPrefix - Import prefix.
 * @returns ESLint options.
 */
module.exports = importPrefix => {
  return {
    consistentImport: [
      {
        altLocalNames: ["VueComponent"],
        localName: "Component",
        sourcePattern: "vue-class-component",
        type: "default"
      },
      {
        localName: "Vue",
        sourcePattern: "vue",
        type: "default"
      },
      {
        localName: "VueRouter",
        sourcePattern: "vue-router",
        type: "default"
      },
      {
        localName: "VueDraggable",
        sourcePattern: "vuedraggable",
        type: "default"
      },
      {
        altLocalNames: ["vueTestUtils"],
        sourcePattern: "@vue/test-utils",
        type: "wildcard"
      },
      {
        altLocalNames: ["quasarFrameworkTestUtils"],
        autoImportSource: `${importPrefix}/testUtils`,
        sourcePattern: "@skylib/quasar-extension/*/testUtils",
        type: "wildcard"
      },
      {
        autoImportSource: `${importPrefix}/facade-implementations/reactiveStorage/vueStorage`,
        sourcePattern:
          "@skylib/quasar-extension/*/facade-implementations/reactiveStorage/vueStorage",
        type: "wildcard"
      }
    ]
  };
};
