import { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxOutlineIcon } from "./CheckboxOutlineIcon";

const meta: Meta<typeof CheckboxOutlineIcon> = {
  title: "Icons/Icons/CheckboxOutlineIcon",
  component: CheckboxOutlineIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof CheckboxOutlineIcon>;

export const Default: Story = {};

export default meta;
