import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";
import { Heading, Paragraph } from "@digdir/designsystemet-react";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  args: {
    children: "Card text",
  },
};

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const CardAsButtonWithBlocks: Story = {
  render: () => (
    <Card asChild data-color="neutral">
      <button type="button">
        <Card.Block>
          <Heading>Innstillinger og personvern</Heading>
        </Card.Block>
        <Card.Block>
          <Paragraph>Dette åpner en dialog der du kan oppdatere personvernvalg, justere innstillinger og tilpasse hvordan tjenesten behandler informasjonen din. Du kan se gjennom endringene før du lagrer.</Paragraph>
        </Card.Block>
      </button>
    </Card>
  ),
};

export default meta;
