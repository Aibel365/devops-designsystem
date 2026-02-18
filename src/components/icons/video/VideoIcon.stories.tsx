import { Meta, StoryObj } from "@storybook/react-vite";
import { VideoIcon } from "./VideoIcon";

const meta: Meta<typeof VideoIcon> = {
  title: "Icons/Icons/VideoIcon",
  component: VideoIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof VideoIcon>;

export const Default: Story = {};

export default meta;
