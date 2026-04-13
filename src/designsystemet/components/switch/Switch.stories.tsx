import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

Switch.displayName = "Switch";

const meta: Meta<typeof Switch> = {
    title: "Designsystemet/Switch",
    component: Switch,
    args: {
        label: "Switch Label",
        disabled: false,
        readOnly: false,
        position: "start",
        "data-size": "md",
        "data-color": "bright-blue"
    },
    argTypes: {
        label: { control: { type: "text" } },
        description: { control: { type: "text" } },
        disabled: { control: { type: "radio" }, options: [true, false] },
        readOnly: { control: { type: "radio" }, options: [true, false] },
        checked: { control: { type: "radio" }, options: [true, false] },
        position: { control: { type: "radio" }, options: ["start", "end"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "bright-blue", "green", "neutral"] }
    }
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Disabled: StoryObj<typeof Switch> = {
    args: {
        disabled: true
    }
};

export const WithDescription: StoryObj<typeof Switch> = {
    args: {
        description: "Switch Description"
    }
};

export const Checked: StoryObj<typeof Switch> = {
    args: {
        checked: true
    }
};

export const AlignedToTheEnd: StoryObj<typeof Switch> = {
    args: {
        position: "end"
    }
};

export const Grouped: StoryObj<typeof Switch> = {
    render: (args) => {
        const { children } = args;
        return (
            <div className="ads:flex ads:flex-col ads:gap-1">
                <Switch
                    checked={true}
                    label="Switch 1"
                >
                    {children}
                </Switch>
                <Switch label="Switch 2">{children}</Switch>
                <Switch
                    readOnly={true}
                    checked={true}
                    label="Switch 3"
                >
                    {children}
                </Switch>
            </div>
        );
    }
};

export default meta;
