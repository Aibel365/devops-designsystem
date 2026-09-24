import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field } from "../field/Field";
import { Label } from "../typography/label/Label";
import { ValidationMessage } from "../typography/validationmessage/ValidationMessage";
import { Select } from "./Select";

Select.displayName = "Select";
Field.displayName = "Field";
Label.displayName = "Label";
ValidationMessage.displayName = "ValidationMessage";

const meta: Meta<typeof Select> = {
    title: "Designsystemet/Select",
    component: Select,
    args: {
        children: (
            <>
                <Select.Option
                    value=""
                    disabled
                >
                    Select a mountain &hellip;
                </Select.Option>
                <Select.Option value="everest">Mount Everest</Select.Option>
                <Select.Option value="aconcagua">Aconcagua</Select.Option>
                <Select.Option value="denali">Denali</Select.Option>
                <Select.Option value="kilimanjaro">Kilimanjaro</Select.Option>
                <Select.Option value="elbrus">Elbrus</Select.Option>
                <Select.Option value="vinson">Mount Vinson</Select.Option>
                <Select.Option value="puncakjaya">Puncak Jaya</Select.Option>
                <Select.Option value="kosciuszko">Mount Kosciuszko</Select.Option>
            </>
        ),
        disabled: false,
        readOnly: false,
        width: "full"
    },
    argTypes: {
        children: { control: false, table: { disable: true } },
        disabled: { control: "boolean" },
        width: { control: { type: "radio" }, options: ["auto", "full"] },
        readOnly: { control: "boolean" }
    }
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a mountain</Label>
                <Select {...restArgs}>{children}</Select>
            </Field>
        );
    }
};

export const WithEmptyDefaultValue: Story = {
    args: {
        defaultValue: ""
    },
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a mountain</Label>
                <Select {...restArgs}>{children}</Select>
            </Field>
        );
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    },
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a mountain</Label>
                <Select {...restArgs}>{children}</Select>
            </Field>
        );
    }
};

export const WithError: Story = {
    args: {
        "aria-invalid": true
    },
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a mountain</Label>
                <Select {...restArgs}>{children}</Select>
                <ValidationMessage>Required</ValidationMessage>
            </Field>
        );
    }
};

export const WithOptGroup: Story = {
    args: {
        children: (
            <>
                <Select.Optgroup label="Group1">
                    <Select.Option value="everest">Mount Everest</Select.Option>
                    <Select.Option value="aconcagua">Aconcagua</Select.Option>
                    <Select.Option value="denali">Denali</Select.Option>
                    <Select.Option value="kilimanjaro">Kilimanjaro</Select.Option>
                </Select.Optgroup>
                <Select.Optgroup label="Group2">
                    <Select.Option value="elbrus">Elbrus</Select.Option>
                    <Select.Option value="vinson">Mount Vinson</Select.Option>
                    <Select.Option value="puncakjaya">Puncak Jaya</Select.Option>
                    <Select.Option value="kosciuszko">Mount Kosciuszko</Select.Option>
                </Select.Optgroup>
            </>
        )
    },
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a mountain</Label>
                <Select {...restArgs}>{children}</Select>
            </Field>
        );
    }
};

export const ReadOnly: Story = {
    args: {
        readOnly: true
    },
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a mountain</Label>
                <Select {...restArgs}>{children}</Select>
            </Field>
        );
    }
};

export default meta;
