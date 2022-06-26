// eslint-disable-next-line @skylib/no-restricted-syntax -- Wait for @skylib/eslint-plugin update
module.exports = {
  overrides: [
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
    // fixme - Test filenames should match src filenames
    {
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-filename-check"
      ),
      files: "*.vue"
    },
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
    // fixme - Disable individual suboptions
    {
      files: [
        "./src/components/BaseButton.vue",
        "./src/components/Card.vue",
        "./src/components/CardActions.vue",
        "./src/components/CardSection.vue",
        "./src/components/ExpansionItem.vue",
        "./src/components/Field.vue",
        "./src/components/Form.vue",
        "./src/components/Item.vue",
        "./src/components/Knob.vue",
        "./src/components/Menu.vue",
        "./src/components/OptionGroup.vue",
        "./src/components/PopupProxy.vue",
        "./src/components/Select.vue",
        "./src/components/Toggle.vue",
        "./src/components/Tooltip.vue"
      ],
      rules: { "vue/no-restricted-syntax": "off" }
    }
  ],
  rules: { "import/no-extraneous-dependencies": "off" }
};
