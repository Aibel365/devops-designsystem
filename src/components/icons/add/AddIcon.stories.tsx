import { Meta, StoryObj } from "@storybook/react-vite";
import { AddIcon } from "./AddIcon";

const meta: Meta<typeof AddIcon> = {
  title: "Icons/Icons/AddIcon",
  component: AddIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof AddIcon>;

export const Default: Story = {};

export default meta;
