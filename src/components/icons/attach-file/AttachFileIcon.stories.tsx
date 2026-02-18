import { Meta, StoryObj } from "@storybook/react-vite";
import { AttachFileIcon } from "./AttachFileIcon";

const meta: Meta<typeof AttachFileIcon> = {
  title: "Icons/Icons/AttachFileIcon",
  component: AttachFileIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof AttachFileIcon>;

export const Default: Story = {};

export default meta;
