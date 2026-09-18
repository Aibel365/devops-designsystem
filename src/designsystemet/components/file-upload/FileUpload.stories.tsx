import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../button/Button";
import { Field } from "../field/Field";
import { Label } from "../typography/label/Label";
import { EXPERIMENTAL_FileUpload } from "./FileUpload";

EXPERIMENTAL_FileUpload.displayName = "FileUpload";
Field.displayName = "Field";
Label.displayName = "Label";

const meta: Meta<typeof EXPERIMENTAL_FileUpload> = {
    title: "Designsystemet/FileUpload",
    component: EXPERIMENTAL_FileUpload,
    args: {
        children: (
            <Field>
                <Label>Upload file</Label>
                <EXPERIMENTAL_FileUpload>
                    <Field.Description>Drop file here</Field.Description>
                    <Field.Description>File must be in CSV format and less than 2 MB</Field.Description>
                    <Button data-variant="secondary">Upload file</Button>
                    <input type="file" />
                </EXPERIMENTAL_FileUpload>
            </Field>
        )
    },
    argTypes: {
        children: { control: false, table: { disable: true } }
    }
};

type Story = StoryObj<typeof EXPERIMENTAL_FileUpload>;

export const Default: Story = {};

export default meta;
