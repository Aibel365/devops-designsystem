import { Meta, StoryObj } from "@storybook/react-vite";
import { ViewWeekIcon } from "./ViewWeekIcon";

const meta: Meta<typeof ViewWeekIcon> = {
  title: "Icons/Icons/ViewWeekIcon",
  component: ViewWeekIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ViewWeekIcon>;

export const Default: Story = {};

export default meta;
