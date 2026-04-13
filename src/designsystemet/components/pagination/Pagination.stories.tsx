import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "./Pagination";

Pagination.displayName = "Pagination";

const meta: Meta<typeof Pagination> = {
    title: "Designsystemet/Pagination",
    component: Pagination,
    argTypes: {
        "data-current": { control: { type: "text" } },
        "data-total": { control: { type: "text" } },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "bright-blue", "green", "neutral"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] }
    }
};

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    render: (args) => (
        <Pagination {...args}>
            <Pagination.List>
                <Pagination.Item>
                    <Pagination.Button
                        aria-label="Previous page"
                        data-variant="tertiary"
                    >
                        Previous
                    </Pagination.Button>
                </Pagination.Item>

                <Pagination.Item>
                    <Pagination.Button
                        aria-label="Page 1"
                        data-variant="tertiary"
                    >
                        1
                    </Pagination.Button>
                </Pagination.Item>

                <Pagination.Item>
                    <Pagination.Button
                        aria-label="Page 2"
                        data-variant="primary"
                    >
                        2
                    </Pagination.Button>
                </Pagination.Item>

                <Pagination.Item />

                <Pagination.Item>
                    <Pagination.Button
                        aria-label="Page 9"
                        data-variant="tertiary"
                    >
                        9
                    </Pagination.Button>
                </Pagination.Item>

                <Pagination.Item>
                    <Pagination.Button
                        aria-label="Page 10"
                        data-variant="tertiary"
                    >
                        10
                    </Pagination.Button>
                </Pagination.Item>

                <Pagination.Item>
                    <Pagination.Button
                        aria-label="Next page"
                        data-variant="tertiary"
                    >
                        Next
                    </Pagination.Button>
                </Pagination.Item>
            </Pagination.List>
        </Pagination>
    )
};

export default meta;
