import { Badge as BadgePrimitive } from "@digdir/designsystemet-react";
import type {
  BadgeProps as BadgePropsPrimitive,
  BadgePositionProps,
} from "@digdir/designsystemet-react";
import type { ReactNode } from "react";

export type BadgeProps = Omit<BadgePropsPrimitive, "children"> & {
  placementChildren?: BadgePositionProps["placement"];
  overlapChildren?: BadgePositionProps["overlap"];
  children?: ReactNode;
};

/**
 * Badge is a non-interactive component that displays status with or without a number.
 * Use Tag if you want text instead of a number.
 *
 * Based on Designsystemet's Badge component.
 * 
 * @param placementChildren Controls where the badge is placed relative to the wrapped child element.
 * @param overlapChildren Controls how the badge is positioned when floating, based on the
 * shape of the wrapped element. Default is `rectangle` but can also be set to `circle` 
 * which will look better with round children like round icons or avatars).
 * @param children Optional element to wrap with the badge. When provided, the badge is positioned
 * relative to this content using `Badge.Position`.

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
