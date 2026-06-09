import type { Meta, StoryObj } from "@storybook/react-vite";
import { FooterBar } from "./FooterBar";

const handleBackClick = () => {
    alert("Back navigation triggered");
};

const meta: Meta<typeof FooterBar> = {
    title: "Components/FooterBar",
    component: FooterBar
};

type Story = StoryObj<typeof FooterBar>;

export const Default: Story = {
    args: {
        onBackClick: handleBackClick
    }
};

export const WithCenteredContent: Story = {
    args: {
        ...Default.args,
        centeredContent: "Custom content"
    }
};

export const WithRightContent: Story = {
    args: {
        ...Default.args,
        rightContent: <p>Custom content</p>
    }
};

export const WithCenteredAndRightContent: Story = {
    args: {
        ...Default.args,
        centeredContent: <p>Centered content</p>,
        rightContent: <p>Right content</p>
    }
};

export default meta;
