import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./Select";
import { Field } from "../field/Field";
import { Label } from "../label/Label";

const meta: Meta<typeof Select> = {
    title: "Designsystemet/Select",
    component: Select
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => (
        <Field>
            <Label>Select a mountain</Label>
            <Select defaultValue="">
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
            </Select>
        </Field>
    )
};

export default meta;
