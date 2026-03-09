import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
    title: "Atoms/Paragraph",
    component: Paragraph,
    argTypes: {
        children: { control: "text", description: "Visible text in the paragraph" },
        "data-size": { control: "inline-radio", options: ["xs", "sm", "md", "lg", "xl"], description: "Paragraph text size" },
        variant: { control: "inline-radio", options: ["long", "default", "short"], description: "Paragraph line spacing" },
        asChild: { control: "boolean" }
    },
    args: {
        children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id libero vitae lacus sollicitudin consectetur eu quis odio. Duis ultrices scelerisque dictum. Nullam mauris nibh, lobortis in imperdiet in, iaculis ut ante. Sed ac lectus quis nisi convallis dictum a et mi. Quisque dignissim mi vel tincidunt dictum.",
        "data-size": "md",
        variant: "default",
        asChild: false
    }
};

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {};

export const Sizes: Story = {
    parameters: {
        controls: {
            disable: true
        }
    },
    render: () => (
        <>
            <Paragraph data-size="xs">This is a xs paragraph</Paragraph>
            <Paragraph data-size="sm">This is a sm paragraph</Paragraph>
            <Paragraph data-size="md">This is a md paragraph</Paragraph>
            <Paragraph data-size="lg">This is a lg paragraph</Paragraph>
            <Paragraph data-size="xl">This is a xl paragraph</Paragraph>
        </>
    )
};

export default meta;
