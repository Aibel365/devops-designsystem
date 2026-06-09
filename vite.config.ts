/// <reference types="vitest/config" />
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const dirname = typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        dts({
            bundleTypes: true,
            exclude: ["**/*.stories.ts", "**/*.test.ts"],
            tsconfigPath: "./tsconfig.app.json"
        }),
        svgr()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "devops designsystem",
            fileName: "index"
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"]
        }
    },

    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, ".storybook")
                    })
                ],
                test: {
                    name: "storybook",
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [
                            {
                                browser: "chromium"
                            }
                        ]
                    },
                    setupFiles: [".storybook/vitest.setup.ts"]
                }
            }
        ]
    }
});
