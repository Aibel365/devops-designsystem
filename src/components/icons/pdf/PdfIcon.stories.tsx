import { Meta, StoryObj } from "@storybook/react-vite";
import { PdfIcon } from "./PdfIcon";

const meta: Meta<typeof PdfIcon> = {
    title: "Icons/Icons/PdfIcon",
    component: PdfIcon,
    args: {
        size: 20,
        color: "#003366"
    }
};

type Story = StoryObj<typeof PdfIcon>;

export const Default: Story = {};

export default meta;
