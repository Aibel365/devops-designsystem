import { Meta, StoryObj } from "@storybook/react-vite";
import { ExpandMoreIcon } from "./ExpandMoreIcon";

const meta: Meta<typeof ExpandMoreIcon> = {
  title: "Icons/Icons/ExpandMoreIcon",
  component: ExpandMoreIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ExpandMoreIcon>;

export const Default: Story = {};

export default meta;
