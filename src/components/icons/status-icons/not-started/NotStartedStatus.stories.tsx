import { Meta, StoryObj } from "@storybook/react-vite";
import { NotStartedStatusIcon } from "./NotStartedStatusIcon";

const meta: Meta<typeof NotStartedStatusIcon> = {
    title: "Icons/Icons/NotStartedStatusIcon",
    component: NotStartedStatusIcon,
    args: {
        size: 20,
        style: { color: "#8e9199" }
    }
};

type Story = StoryObj<typeof NotStartedStatusIcon>;

export const Default: Story = {};

export default meta;
