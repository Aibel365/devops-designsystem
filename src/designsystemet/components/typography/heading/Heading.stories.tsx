import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
    title: "Designsystemet/Typography/Heading",
    component: Heading,
    args: {
        children: "This is the title",
        level: 2,
        asChild: false
    },
    argTypes: {
        level: { control: { type: "select" }, description: "Heading level. This will translate into any h1-6 level unless asChild is true", options: [1, 2, 3, 4, 5, 6] },
        asChild: { control: { type: "boolean" }, options: [true, false] },
        "data-size": { control: { type: "radio" }, options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"] }
    }
};

type Story = StoryObj<typeof Heading>;

const Headings = () => (
    <>
        <Heading data-size="2xl">This is a 2xl heading</Heading>
        <Heading data-size="xl">This is an xl heading</Heading>
        <Heading data-size="lg">This is a lg heading</Heading>
        <Heading data-size="md">This is a md heading</Heading>
        <Heading data-size="sm">This is a sm heading</Heading>
        <Heading data-size="xs">This is an xs heading</Heading>
        <Heading data-size="2xs">This is a 2xs heading</Heading>
    </>
);

export const Default: Story = {};

export const DifferentSizes: Story = {
    args: {
        children: <Headings />
    }
};

export default meta;
