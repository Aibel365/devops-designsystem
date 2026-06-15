import { withoutVitePlugins } from "@storybook/builder-vite";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@chromatic-com/storybook", "@storybook/addon-vitest", "@storybook/addon-a11y", "@storybook/addon-docs"],
    framework: "@storybook/react-vite",
    core: {
        builder: "@storybook/builder-vite"
    },
    async viteFinal(config) {
        config.plugins = await withoutVitePlugins(config.plugins, ["unplugin-dts"]);

        return config;
    }
};
export default config;
