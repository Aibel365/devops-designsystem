import { Meta, StoryObj } from "@storybook/react-vite";
import { DensitySmallIcon } from "./DensitySmallIcon";

const meta: Meta<typeof DensitySmallIcon> = {
    title: "Icons/Icons/DensitySmallIcon",
    component: DensitySmallIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof DensitySmallIcon>;

export const Default: Story = {};

export default meta;
