import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
    title: "Designsystemet/Popover",
    component: Popover
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: () => (
        <Popover.TriggerContext>
            <Popover.Trigger>Åpne popover</Popover.Trigger>
            <Popover placement="top">Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten.</Popover>
        </Popover.TriggerContext>
    )
};

export default meta;
