import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

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
            entry: ["src/index.ts"],
            name: "devops designsystem",
            fileName: "index"
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"]
        }
    }
});
