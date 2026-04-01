import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../designsystemet/components/button/Button";
import { ConditionalPopover } from "./ConditionalPopover";

const meta: Meta<typeof ConditionalPopover> = {
    title: "Components/ConditionalPopover",
    component: ConditionalPopover,
    args: {
        condition: true,
        popoverContent: (
            <div style={{ padding: "1rem", maxWidth: "200px" }}>
                <p>Popover content shown when condition=true.</p>
            </div>
        ),
        children: <Button>Trigger Button</Button>
    },
    argTypes: {
        children: {
            control: false,
            table: { disable: true }
        },
        popoverContent: {
            control: false,
            table: { disable: true }
        }
    }
};

export default meta;
type Story = StoryObj<typeof ConditionalPopover>;

export const WithPopover: Story = {};

export const WithoutPopover: Story = {
    args: {
        condition: false
    }
};
