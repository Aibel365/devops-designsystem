import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumbs } from "./Breadcrumbs";

Breadcrumbs.displayName = "Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
    title: "Designsystemet/Breadcrumbs",
    component: Breadcrumbs,
    args: { "data-size": "md" },
    argTypes: {
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        children: {
            control: false,
            table: { disable: true }
        }
    }
};

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Breadcrumbs.Link
                    href="#"
                    aria-label="Tilbake til Nivå 3"
                >
                    Nivå 3
                </Breadcrumbs.Link>
                <Breadcrumbs.List>
                    <Breadcrumbs.Item>
                        <Breadcrumbs.Link href="#">Nivå 1</Breadcrumbs.Link>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <Breadcrumbs.Link href="#">Nivå 2</Breadcrumbs.Link>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <Breadcrumbs.Link href="#">Nivå 3</Breadcrumbs.Link>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <Breadcrumbs.Link href="#">Nivå 4</Breadcrumbs.Link>
                    </Breadcrumbs.Item>
                </Breadcrumbs.List>
            </>
        )
    }
};

export default meta;
