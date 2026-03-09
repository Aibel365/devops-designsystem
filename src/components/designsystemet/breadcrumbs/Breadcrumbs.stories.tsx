import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
    title: "Atoms/Breadcrumbs",
    component: Breadcrumbs,
    args: {
        links: [
            { displayText: "Level 1", link: "#" },
            { displayText: "Level 2", link: "#" },
            { displayText: "Level 3", link: "#" },
            { displayText: "Level 4", link: "#" }
        ]
    }
};

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const ListOfStrings: Story = {
    args: {
        links: ["https://aibel365.sharepoint.com", "https://aibel365.sharepoint.com/sites", "https://aibel365.sharepoint.com/sites/it"]
    }
};

export const OneElement: Story = {
    args: {
        links: ["https://aibel.com"]
    }
};

export const WithResponsiveFallback: Story = {
    args: {
        links: [
            { displayText: "Will", link: "#" },
            { displayText: "change", link: "#" },
            { displayText: "for", link: "#" },
            { displayText: "small", link: "#" },
            { displayText: "screens", link: "#" }
        ],
        enableResponsiveFallback: true
    }
};

export default meta;
