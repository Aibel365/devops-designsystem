import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../card/Card";
import { Details } from "./Details";

Details.displayName = "Details";

const meta: Meta<typeof Details> = {
    title: "Designsystemet/Details",
    component: Details,
    args: {
        children: (
            <>
                <Details.Summary>Details heading text</Details.Summary>
                <Details.Content>Details content</Details.Content>
            </>
        ),
        variant: "default",
        "data-size": "md",
        "data-color": "bright-blue"
    },
    argTypes: {
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "bright-blue", "green", "neutral"] },
        variant: { control: { type: "radio" }, options: ["default", "tinted"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        open: { control: { type: "boolean" }, options: [true, false] },
        defaultOpen: { control: { type: "boolean" }, options: [true, false] },
        children: {
            control: false,
            table: { disable: true }
        }
    }
};

type Story = StoryObj<typeof Details>;

export const Default: Story = {};

export const TintedAndInCard: Story = {
    render: () => (
        <Card>
            <Details variant="tinted">
                <Details.Summary>Details heading text</Details.Summary>
                <Details.Content>Details content</Details.Content>
            </Details>
        </Card>
    )
};

export const DefaultOpen: Story = {
    args: {
        children: (
            <>
                <Details.Summary>Details heading text</Details.Summary>
                <Details.Content>Details content</Details.Content>
            </>
        ),
        defaultOpen: true
    }
};

export default meta;
