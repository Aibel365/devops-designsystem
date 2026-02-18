import { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorIconFilled } from "./ErrorIconFilled";

const meta: Meta<typeof ErrorIconFilled> = {
  title: "Icons/Icons/ErrorIconFilled",
  component: ErrorIconFilled,
  args: {
    size: 20,
    color: "#003366",
  },
};

type Story = StoryObj<typeof ErrorIconFilled>;

export const Default: Story = {};

export default meta;
