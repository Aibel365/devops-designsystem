import { Paragraph as ParagraphPrimitive } from "@digdir/designsystemet-react";
import { ParagraphProps as ParagraphPropsPrimitive } from "@digdir/designsystemet-react";

/**
 * Paragraph is used for continuous text and is typically used in articles, components, help texts and the like. *
 * This atom forwards all props from the Designsystemet paragraph primitive.
 */
export type ParagraphProps = ParagraphPropsPrimitive;

/**
 * Paragraph atom wrapper around Designsystemet's Paragraph primitive. *
 * Based on Designsystemet's Paragraph component.
 *
 * @param props Paragraph props forwarded to the underlying primitive.
 * @returns Rendered paragraph content.
 * @see https://designsystemet.no/no/components/docs/paragraph/overview
 */
export const Paragraph = (props: ParagraphPropsPrimitive) => {
    return <ParagraphPrimitive {...props}>{props.children}</ParagraphPrimitive>;
};
