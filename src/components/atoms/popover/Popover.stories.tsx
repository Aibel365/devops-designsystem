import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
    title: "Atoms/Popover",
    component: Popover,
    argTypes: {
        heading: { control: "text" },
        content: { control: "text" }
    },
    args: {
        heading: "Åpne popover",
        content: "Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten."
    }
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {};
export default meta;
