import { Meta, StoryObj } from "@storybook/react-vite";
import { DensityLargeIcon } from "./DensityLargeIcon";

const meta: Meta<typeof DensityLargeIcon> = {
  title: "Icons/Icons/DensityLargeIcon",
  component: DensityLargeIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof DensityLargeIcon>;

export const Default: Story = {};

export default meta;
