import { fixupPluginRules } from "@eslint/compat";
import js from "@eslint/js";
import i18next from "eslint-plugin-i18next";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, i18next: fixupPluginRules(i18next) },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, __IS_DEV__: "readonly" } },
  },
  {
    rules: {
      "no-unused-vars": 1,
      "no-undef": 1,
      "i18next/no-literal-string": ["error", { markupOnly: true, ignoreAttribute: ["data-testid"] }],
    },
  },
  {
    files: ["**/*.test.{js,ts,jsx,tsx}", "**/*.spec.{js,ts,jsx,tsx}", "**/__tests__/**/*.{js,ts,jsx,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
    },
  },
  tseslint.configs.recommended,
]);
