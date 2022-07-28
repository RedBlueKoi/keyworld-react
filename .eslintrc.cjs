/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  settings: {
    react: { version: "detect" }
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"]
}
