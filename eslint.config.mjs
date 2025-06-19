// ESLint Flat Config setup
import { defineConfig } from "eslint/config";

// ESLint's built-in recommended JS rules
import js from "@eslint/js";

// Global variables (Node.js, CommonJS, Jest)
import globals from "globals";

// Prettier plugin for ESLint
import prettierPlugin from "eslint-plugin-prettier";
import prettier from "eslint-config-prettier";

// SonarJS plugin (code smell detection)
import sonarjs from "eslint-plugin-sonarjs";

export default defineConfig([
  {
    // Apply to all JavaScript-like files
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.vscode/**", "**/coverage/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.commonjs,
        ...globals.jest
      }
    },
    plugins: {
      prettier: prettierPlugin,
      sonarjs
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint recommended
      ...sonarjs.configs.recommended.rules, // SonarJS recommended
      "prettier/prettier": "error" // Prettier formatting enforced as ESLint error
    }
  },

  // Disable rules that conflict with Prettier
  {
    ...prettier
  }
]);
