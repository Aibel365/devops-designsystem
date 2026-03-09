import { Button as ButtonPrimitive } from "@digdir/designsystemet-react";
import type { ButtonProps as ButtonPropsPrimitive } from "@digdir/designsystemet-react";

export type ButtonProps = ButtonPropsPrimitive;

/**
 * Button allows users to perform actions.
 *
 * Based on Designsystemet's Button component.
 * @see https://designsystemet.no/en/components/docs/button/overview
 */
export const Button = (props: ButtonProps) => {
    return <ButtonPrimitive {...props} />;
};
