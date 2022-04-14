module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  // eslint-disable-next-line no-warning-comments
  // fixme
  rules: {
    "@skylib/no-multi-type-tuples": "off",
    "@skylib/no-mutable-signature": "off",
    "@skylib/no-unsafe-object-assignment": "off",
    "@skylib/prefer-readonly": "off",
    "@skylib/prefer-readonly-props": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "eslint-comments/require-description": "off"
  }
};
