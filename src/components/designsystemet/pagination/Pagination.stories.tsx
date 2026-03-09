import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
    title: "Designsystemet/Pagination",
    component: Pagination
};

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    render: () => (
        <Pagination>
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
