module.exports = {
  rules: {
    // "no-empty-function": "off",
    // "no-undef": "off",
    "@typescript-eslint/no-empty-function": "off"
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    allowImportExportEverywhere: true,
    sourceType: "module"
    // ecmaFeatures: {
    //   modules: true
    // }
    //   "ecmaFeatures": {
    //     "legacyDecorators": true
    //   },
    //   extends: [
    //     "plugin:vue/recommended",
    //     "eslint:recommended",
    //     "@vue/typescript/recommended"
    //   ]
  }
};
