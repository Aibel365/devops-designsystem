import { Meta, StoryObj } from "@storybook/react-vite";
import { FileIcon } from "./FileIcon";

const meta: Meta<typeof FileIcon> = {
  title: "Icons/Icons/FileIcon",
  component: FileIcon,
  args: {
    size: 20,
    color: "#003366",
  },
};

type Story = StoryObj<typeof FileIcon>;

export const Default: Story = {};

export default meta;
