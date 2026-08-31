// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    globalIgnores(["dist", "storybook-static", "node_modules"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        rules: {
            "react-refresh/only-export-components": "warn"
        }
    },
    {
        // Library entry points and re-export wrappers around @digdir components are not Fast Refresh boundaries.
        files: ["src/designsystemet/**/*.{ts,tsx}"],
        rules: {
            "react-refresh/only-export-components": "off"
        }
    }
]);
