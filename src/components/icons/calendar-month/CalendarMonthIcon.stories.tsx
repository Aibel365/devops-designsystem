import { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarMonthIcon } from "./CalendarMonthIcon";

const meta: Meta<typeof CalendarMonthIcon> = {
  title: "Icons/Icons/CalendarMonthIcon",
  component: CalendarMonthIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof CalendarMonthIcon>;

export const Default: Story = {};

export default meta;
