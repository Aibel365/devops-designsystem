import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field } from "./Field";
import { Label } from "../label/Label";
import { Input } from "../input/Input";
import { ValidationMessage } from "../validationmessage/ValidationMessage";

const meta: Meta<typeof Field> = {
    title: "Designsystemet/Field",
    component: Field
};

type Story = StoryObj<typeof Field>;

export const Default: Story = {
    render: () => (
        <Field>
            <Label>Last name</Label>
            <Field.Description>Last name cannot contain spaces</Field.Description>
            <Input defaultValue="Smith Washington" />
            <ValidationMessage>You cannot have spaces in your last name</ValidationMessage>
        </Field>
    )
};

export default meta;
