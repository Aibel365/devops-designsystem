import { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxIndeterminateIcon } from "./CheckboxIndeterminateIcon";

const meta: Meta<typeof CheckboxIndeterminateIcon> = {
  title: "Icons/Icons/CheckboxIndeterminateIcon",
  component: CheckboxIndeterminateIcon,
  args: {
    size: 20,
    color: "#003366",
  },
};

type Story = StoryObj<typeof CheckboxIndeterminateIcon>;

export const Default: Story = {};

export default meta;
