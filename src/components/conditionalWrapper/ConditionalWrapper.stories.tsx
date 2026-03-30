import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConditionalWrapper } from "./ConditionalWrapper";
import { Button } from "../../designsystemet/components/button/Button";

const meta: Meta<typeof ConditionalWrapper> = {
    title: "Components/ConditionalWrapper",
    component: ConditionalWrapper,
    args: {
        wrapper: (c) => <div>{c}</div>,
        children: <Button>Wrapped button</Button>
    },
    argTypes: {
        children: {
            control: false,
            table: { disable: true }
        }
    }
};

type Story = StoryObj<typeof ConditionalWrapper>;

export const Default: Story = {};

export default meta;
