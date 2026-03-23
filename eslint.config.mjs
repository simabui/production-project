import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, __IS_DEV__: "readonly" } },
  },
  tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": 1,
      "no-undef": 1,
    },
  },
]);
