import { Meta, StoryObj } from "@storybook/react-vite";

import { UploadFileIcon } from "./UploadFileIcon";

const meta: Meta<typeof UploadFileIcon> = {
    title: "Icons/Icons/UploadFileIcon",
    component: UploadFileIcon,
    args: {
        size: 20,
        color: "#003366"
    }
};

type Story = StoryObj<typeof UploadFileIcon>;

export const Default: Story = {};

export default meta;
