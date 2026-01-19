import { Badge as BadgePrimitive } from "@digdir/designsystemet-react";
import type {
  BadgeProps as BadgePropsPrimitive,
  BadgePositionProps as BadgePositionPropsPrimitive,
} from "@digdir/designsystemet-react";

type BadgeProps = BadgePropsPrimitive;

/**
 * Badge is a non-interactive component that displays status with or without a number.
 * Use Tag if you want text instead of a number.
 *
 * Based on Designsystemet's Badge component.
 * @see https://designsystemet.no/en/components/docs/badge/overview
 */
export const Badge = (props: BadgeProps) => {
  return <BadgePrimitive {...props} />;
};

type BadgePositionProps = BadgePositionPropsPrimitive;
Badge.Position = (props: BadgePositionProps) => {
  return <BadgePrimitive.Position {...props} />;
};
