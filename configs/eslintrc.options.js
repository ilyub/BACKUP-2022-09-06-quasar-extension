module.exports = {
  consistentImport: [
    {
      sourcePattern: "@skylib/quasar-extension/src/testUtils",
      type: "wildcard"
    },
    {
      altLocalNames: ["vueTestUtils"],
      sourcePattern: "@vue/test-utils",
      type: "wildcard"
    },
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
    }
  ]
};
