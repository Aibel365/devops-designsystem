import { Meta, StoryObj } from "@storybook/react-vite";
import { InProgressStatusIcon } from "./InProgressStatusIcon";

const meta: Meta<typeof InProgressStatusIcon> = {
  title: "Icons/Icons/InProgressStatusIcon",
  component: InProgressStatusIcon,
  args: {
    size: 20,
    style: { color: "#8e9199" },
  },
};

type Story = StoryObj<typeof InProgressStatusIcon>;

export const Default: Story = {};

export default meta;
