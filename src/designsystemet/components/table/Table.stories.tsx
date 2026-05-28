import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from "./Table";

Table.displayName = "Table";

const meta: Meta<typeof Table> = {
    title: "Designsystemet/Table",
    component: Table,
    args: {
        zebra: false,
        stickyHeader: false,
        border: false,
        hover: false,
        "data-size": "md",
        "data-color": "aibel-bright-blue",
        children: (
            <>
                <caption>Table caption</caption>
                <Table.Head>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 4</Table.Cell>
                        <Table.Cell>Cell 5</Table.Cell>
                        <Table.Cell>Cell 6</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 7</Table.Cell>
                        <Table.Cell>Cell 8</Table.Cell>
                        <Table.Cell>Cell 9</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 10</Table.Cell>
                        <Table.Cell>Cell 11</Table.Cell>
                        <Table.Cell>Cell 12</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Foot>
                    <Table.Row>
                        <Table.HeaderCell>Footer 1</Table.HeaderCell>
                        <Table.HeaderCell>Footer 2</Table.HeaderCell>
                        <Table.HeaderCell>Footer 3</Table.HeaderCell>
                    </Table.Row>
                </Table.Foot>
            </>
        )
    },
    argTypes: {
        zebra: { control: { type: "radio" }, options: [true, false] },
        border: { control: { type: "radio" }, options: [true, false] },
        stickyHeader: { control: { type: "radio" }, options: [true, false] },
        hover: { control: { type: "radio" }, options: [true, false] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        children: { control: false, table: { disable: true } }
    }
};

type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export const Zebra: Story = {
    args: {
        zebra: true
    }
};

export const border: Story = {
    args: {
        border: true
    }
};

export default meta;
