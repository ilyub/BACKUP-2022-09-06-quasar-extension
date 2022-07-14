module.exports = {
  overrides: [
    {
      files: "*.vue",
      rules: {
        "@skylib/custom/quasar/vue-prefer-m-btn": "off",
        "@skylib/custom/quasar/vue-prefer-m-card": "off",
        "@skylib/custom/quasar/vue-prefer-m-card-actions": "off",
        "@skylib/custom/quasar/vue-prefer-m-card-section": "off",
        "@skylib/custom/quasar/vue-prefer-m-expansion-item": "off",
        "@skylib/custom/quasar/vue-prefer-m-field": "off",
        "@skylib/custom/quasar/vue-prefer-m-form": "off",
        "@skylib/custom/quasar/vue-prefer-m-input": "off",
        "@skylib/custom/quasar/vue-prefer-m-item": "off",
        "@skylib/custom/quasar/vue-prefer-m-knob": "off",
        "@skylib/custom/quasar/vue-prefer-m-menu": "off",
        "@skylib/custom/quasar/vue-prefer-m-option-group": "off",
        "@skylib/custom/quasar/vue-prefer-m-popup-proxy": "off",
        "@skylib/custom/quasar/vue-prefer-m-select": "off",
        "@skylib/custom/quasar/vue-prefer-m-toggle": "off",
        "@skylib/custom/quasar/vue-prefer-m-tooltip": "off",
        "@skylib/custom/quasar/vue-prefer-quasar-components": [
          "warn",
          {
            message: "Prefer quasar components",
            selector: "VElement[name=/^m-/u]"
          }
        ]
      }
    }
  ]
};
