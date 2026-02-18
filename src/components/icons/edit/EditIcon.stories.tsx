import { Meta, StoryObj } from "@storybook/react-vite";
import { EditIcon } from "./EditIcon";

const meta: Meta<typeof EditIcon> = {
  title: "Icons/Icons/EditIcon",
  component: EditIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof EditIcon>;

export const Default: Story = {};

export default meta;
