import { Badge as BadgePrimitive } from "@digdir/designsystemet-react";
import type {
  BadgeProps as BadgePropsPrimitive,
  BadgePositionProps,
} from "@digdir/designsystemet-react";
import type { ReactNode } from "react";

type BadgeProps = Omit<BadgePropsPrimitive, "children"> & {
  placementChildren?: BadgePositionProps["placement"];
  overlapChildren?: BadgePositionProps["overlap"];
  children?: ReactNode;
};

/**
 * Badge is a non-interactive component that displays status with or without a number.
 * Use Tag if you want text instead of a number.
 *
 * Based on Designsystemet's Badge component.
 * @see https://designsystemet.no/en/components/docs/badge/overview
 */
export const Badge = ({
  placementChildren,
  overlapChildren,
  children,
  ...rest
}: BadgeProps) => {
  return children ? (
    <BadgePrimitive.Position
      placement={placementChildren}
      overlap={overlapChildren}
    >
      <BadgePrimitive {...rest} />
      {children}
    </BadgePrimitive.Position>
  ) : (
    <BadgePrimitive {...rest} />
  );
};
