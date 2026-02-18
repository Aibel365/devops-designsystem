import { Meta, StoryObj } from "@storybook/react-vite";
import { AttachmentIcon } from "./AttachmentIcon";

const meta: Meta<typeof AttachmentIcon> = {
  title: "Icons/Icons/AttachmentIcon",
  component: AttachmentIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof AttachmentIcon>;

export const Default: Story = {};

export default meta;
