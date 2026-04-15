import type { Meta, StoryObj } from "@storybook/react-vite";

import { EXPERIMENTAL_Suggestion } from "./Suggestion";
import { Field } from "../field/Field";
import { Label } from "../typography/label/Label";

EXPERIMENTAL_Suggestion.displayName = "Suggestion";
Field.displayName = "Field";
Label.displayName = "Label";

const meta: Meta<typeof EXPERIMENTAL_Suggestion> = {
    title: "Designsystemet/Suggestion",
    component: EXPERIMENTAL_Suggestion,
    args: {
        multiple: false,
        children: (
            <>
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
            </>
        )
    },
    argTypes: {
        multiple: { control: { type: "radio" }, options: [true, false] },
        children: { control: false, table: { disable: true } },
        selected: {
            control: false,
            description:
                "The selected item of the Suggestion. If `label` and `value` are the same, each item can be a `string`. Otherwise, each item must be a `SuggestionItem`. Using this makes the component controlled and it must be used in combination with `onSelectedChange`."
        },
        defaultSelected: { control: false },
        onSelectedChange: { control: false, description: "Callback when selected items changes." },
        filter: { control: false, description: "Filter options; boolean or a custom callback." },
        creatable: { control: false, description: "Allows the user to create new items." },
        onBeforeMatch: { control: false, description: "Callback when matching input value against options." },
        renderSelected: { control: false, description: "Change how the selected options are rendered inside the `Chip`." },
        onSelectCapture: { control: false }
    }
};

type Story = StoryObj<typeof EXPERIMENTAL_Suggestion>;

export const Default: Story = {
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a destination</Label>
                <EXPERIMENTAL_Suggestion {...restArgs}>{children}</EXPERIMENTAL_Suggestion>
            </Field>
        );
    }
};

export const Multiple: Story = {
    args: {
        multiple: true
    },
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a destination</Label>
                <EXPERIMENTAL_Suggestion {...restArgs}>{children}</EXPERIMENTAL_Suggestion>
            </Field>
        );
    }
};

export const DefaultSelected: Story = {
    args: {
        selected: ["Oslo"]
    },
    render: (args) => {
        const { children, ...restArgs } = args;
        return (
            <Field>
                <Label>Select a destination</Label>
                <EXPERIMENTAL_Suggestion {...restArgs}>{children}</EXPERIMENTAL_Suggestion>
            </Field>
        );
    }
};

export default meta;
