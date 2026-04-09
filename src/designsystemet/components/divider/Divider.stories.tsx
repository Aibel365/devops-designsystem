import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";
import { Paragraph } from "../paragraph/Paragraph";

const meta: Meta<typeof Divider> = {
    title: "Designsystemet/Divider",
    component: Divider
};

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    render: () => (
        <>
            <Paragraph>Above the Divider</Paragraph>
            <Divider />
            <Paragraph>Below the Divider</Paragraph>
        </>
    )
};
export default meta;
