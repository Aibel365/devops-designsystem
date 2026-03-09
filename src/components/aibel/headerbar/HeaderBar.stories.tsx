import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderBar } from "./HeaderBar";

const meta: Meta<typeof HeaderBar> = {
    title: "Aibel/HeaderBar",
    component: HeaderBar,
    argTypes: {
        title: { control: "text" },
        userName: { control: "text" },
        userEmail: { control: "text" }
    },
    args: {
        title: "Construction",
        userName: "Reidar Liabø",
        userEmail: "reidar.liabo@aibel.com"
    }
};

type Story = StoryObj<typeof HeaderBar>;

export const Default: Story = {};
export default meta;
