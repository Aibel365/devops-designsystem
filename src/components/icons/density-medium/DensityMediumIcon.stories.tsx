import { Meta, StoryObj } from "@storybook/react-vite";
import { DensityMediumIcon } from "./DensityMediumIcon";

const meta: Meta<typeof DensityMediumIcon> = {
    title: "Icons/Icons/DensityMediumIcon",
    component: DensityMediumIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof DensityMediumIcon>;

export const Default: Story = {};

export default meta;
