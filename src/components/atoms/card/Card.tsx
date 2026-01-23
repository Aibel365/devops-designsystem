import { Card as CardPrimitive } from "@digdir/designsystemet-react";
import type {
  CardProps as CardPropsPrimitive,
  CardBlockProps as CardBlockPropsPrimitive,
} from "@digdir/designsystemet-react";

export type CardProps = CardPropsPrimitive;
export type CardBlockProps = CardBlockPropsPrimitive;

export const CardBlock = (props: CardBlockProps) => {
  return <CardPrimitive.Block {...props} />;
};

/**
 * Card highlight information or tasks that are related.
 * The component comes in two variants and can contain text, images, text fields, buttons, and links.
 *
 * Use `CardBlock` to compose multiple sections within a single card
 * (e.g., header, media, content, actions) with consistent spacing and layout.
 *
 * Based on Designsystemet's Card component.
 *
 * @see https://designsystemet.no/en/components/docs/card/overview
 */
export const Card = (props: CardProps) => {
  return <CardPrimitive {...props} />;
};
