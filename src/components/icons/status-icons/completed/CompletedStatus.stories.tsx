import { Meta, StoryObj } from "@storybook/react-vite";
import { CompletedStatusIcon } from "./CompletedStatusIcon";

const meta: Meta<typeof CompletedStatusIcon> = {
  title: "Icons/Icons/CompletedStatusIcon",
  component: CompletedStatusIcon,
  args: {
    size: 20,
    style: { color: "#8e9199" },
  },
};

type Story = StoryObj<typeof CompletedStatusIcon>;

export const Default: Story = {};

export default meta;
