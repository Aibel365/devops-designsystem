import type { Meta, StoryObj } from "@storybook/react-vite";

import { EXPERIMENTAL_Suggestion } from "./Suggestion";
import { Field } from "../field/Field";
import { Label } from "../typography/label/Label";

const meta: Meta<typeof EXPERIMENTAL_Suggestion> = {
    title: "Designsystemet/Suggestion",
    component: EXPERIMENTAL_Suggestion
};

type Story = StoryObj<typeof EXPERIMENTAL_Suggestion>;

export const Default: Story = {
    render: () => (
        <Field>
            <Label>Select a destination</Label>
            <EXPERIMENTAL_Suggestion>
                <EXPERIMENTAL_Suggestion.Input />
                <EXPERIMENTAL_Suggestion.Clear />
                <EXPERIMENTAL_Suggestion.List>
                    <EXPERIMENTAL_Suggestion.Empty>No results found</EXPERIMENTAL_Suggestion.Empty>
                    {["Sogndal", "Oslo", "Brønnøysund", "Stavanger", "Trondheim", "Bergen", "Lillestrøm"].map((place) => (
                        <EXPERIMENTAL_Suggestion.Option
                            key={place}
                            label={place}
                            value={place}
                        >
                            {place}
                            <div>Municipality</div>
                        </EXPERIMENTAL_Suggestion.Option>
                    ))}
                </EXPERIMENTAL_Suggestion.List>
            </EXPERIMENTAL_Suggestion>
        </Field>
    )
};

export default meta;
