import { Meta, StoryObj } from "@storybook/react-vite";
import { DownloadIcon } from "./DownloadIcon";

const meta: Meta<typeof DownloadIcon> = {
  title: "Icons/Icons/DownloadIcon",
  component: DownloadIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof DownloadIcon>;

export const Default: Story = {};

export default meta;
