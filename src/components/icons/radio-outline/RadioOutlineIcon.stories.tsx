import { Meta, StoryObj } from "@storybook/react-vite";
import { RadioOutlineIcon } from "./RadioOutlineIcon";

const meta: Meta<typeof RadioOutlineIcon> = {
  title: "Icons/Icons/RadioOutlineIcon",
  component: RadioOutlineIcon,
  args: {
    size: 20,
    color: "#003366",
  },
};

type Story = StoryObj<typeof RadioOutlineIcon>;

export const Default: Story = {};

export default meta;
