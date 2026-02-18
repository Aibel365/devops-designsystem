import { Tooltip as TooltipPrimitive } from "@digdir/designsystemet-react";
import type { TooltipProps as TooltipPropsPrimitive } from "@digdir/designsystemet-react";

export type TooltipProps = TooltipPropsPrimitive;

/**
 * Tooltip displays brief information when the user hovers over or focuses on an element.
 * It is used for secondary information, such as explaining the meaning of an icon.
 *
 * Based on Designsystemet's Tooltip component.
 * @see https://designsystemet.no/en/components/docs/tooltip/overview
 */

export const Tooltip = (props: TooltipProps) => {
    return <TooltipPrimitive {...props}>{props.children}</TooltipPrimitive>;
};
