import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
    title: "Atoms/Popover",
    component: Popover,
    argTypes: {
        heading: { control: "text" }
    },
    args: {
        heading: "Open popover",
        children: "Popovers are used to display more detailed or interactive additional information without taking the user away from the context. They can be used as an extended solution when Tooltips are not sufficient."
    }
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {};
export default meta;
