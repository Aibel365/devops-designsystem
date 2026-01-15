import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert } from "./Alert";
import { Heading, Paragraph } from "@digdir/designsystemet-react";

const meta: Meta<typeof Alert> = {
  title: "Atoms/Alert",
  component: Alert,
  args: {
    children: "Message inside alert",
  },
};

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    "data-color": "info",
  },
};

export const Success: Story = {
  args: {
    "data-color": "success",
  },
};

export const Warning: Story = {
  args: {
    "data-color": "warning",
  },
};

export const Danger: Story = {
  args: {
    "data-color": "danger",
  },
};

export const WithHeading: Story = {
  render: () => (
    <Alert>
      <Heading>This is the heading</Heading>
      Message inside alert
    </Alert>
  ),
};

export default meta;
