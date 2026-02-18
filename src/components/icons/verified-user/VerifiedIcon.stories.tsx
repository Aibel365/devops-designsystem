import { Meta, StoryObj } from "@storybook/react-vite";
import { VerifiedUserIcon } from "./VerifiedUserIcon";

const meta: Meta<typeof VerifiedUserIcon> = {
    title: "Icons/Icons/VerifiedUserIcon",
    component: VerifiedUserIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof VerifiedUserIcon>;

export const Default: Story = {};

export default meta;
