import { Divider as DividerPrimitive } from "@digdir/designsystemet-react";
import type { DividerProps as DividerPropsPrimitive } from "@digdir/designsystemet-react";

export type DividerProps = DividerPropsPrimitive;

/**
 * Divider is used to create a visual separation between content. It is a simple horizontal line that extends across the available width.
 *
 * Based on Designsystemet's Divider component.
 * @see https://designsystemet.no/no/components/docs/divider/overview
 */
export const Divider = (props: DividerProps) => {
  return <DividerPrimitive {...props} />;
};
