import { Meta, StoryObj } from "@storybook/react-vite";
import { LanguageIcon } from "./LanguageIcon";

const meta: Meta<typeof LanguageIcon> = {
  title: "Icons/Icons/LanguageIcon",
  component: LanguageIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof LanguageIcon>;

export const Default: Story = {};

export default meta;
