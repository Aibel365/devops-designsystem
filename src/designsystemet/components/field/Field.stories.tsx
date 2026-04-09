import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field } from "./Field";
import { Label } from "../label/Label";
import { Input } from "../input/Input";
import { ValidationMessage } from "../validationmessage/ValidationMessage";

const meta: Meta<typeof Field> = {
    title: "Designsystemet/Field",
    component: Field,
    args: {
        children: (
            <Field>
                <Label>Last name</Label>
                <Field.Description>Last name cannot contain spaces</Field.Description>
                <Input defaultValue="Smith Washington" />
                <ValidationMessage>You cannot have spaces in your last name</ValidationMessage>
            </Field>
        ),
        position: "start",
        "data-size": "md",
        "data-color": "accent"
    },
    argTypes: {
        "data-color": { control: { type: "radio" }, options: ["accent", "neutral"] },
        position: { control: { type: "radio" }, description: `Position of toggle inputs (radio, checkbox, switch) in field "start" "end"`, options: ["start", "end"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        children: {
            control: false,
            table: { disable: true }
        }
    }
};

type Story = StoryObj<typeof Field>;

export const Default: Story = {};

export const Affix: Story = {
    args: {
        children: (
            <>
                <Label>How much does it cost?</Label>
                <Field.Affixes>
                    <Field.Affix>NOK</Field.Affix>
                    <Input />
                    <Field.Affix>a month</Field.Affix>
                </Field.Affixes>
            </>
        )
    }
};

export const Position: Story = {
    args: {
        children: (
            <>
                <Label>Turn on</Label>
                <Input
                    type="checkbox"
                    role="switch"
                />
            </>
        )
    }
};

export default meta;
