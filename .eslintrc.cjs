/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: ["plugin:react/recommended", "eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  }
}
