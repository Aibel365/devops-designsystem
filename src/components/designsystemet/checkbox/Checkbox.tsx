import { Checkbox as CheckboxPrimitive } from "@digdir/designsystemet-react";
import type { CheckboxProps as CheckboxPropsPrimitive } from "@digdir/designsystemet-react";

export type CheckboxProps = CheckboxPropsPrimitive;

/**
 * Checkbox allows users to select one or more options.
 * It can also be used in situations where the user needs to confirm something.
 *
 * Based on Designsystemet's Checkbox component.
 * @see https://designsystemet.no/en/components/docs/checkbox/overview
 */
export const Checkbox = (props: CheckboxProps) => {
    return <CheckboxPrimitive {...props} />;
};
