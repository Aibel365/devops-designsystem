import { Avatar as AvatarPrimitive } from "@digdir/designsystemet-react";
import type { AvatarProps as AvatarPropsPrimitive } from "@digdir/designsystemet-react";

export type AvatarProps = AvatarPropsPrimitive;

/**
 * Avatar displays an image, initials, or icon for a person, entity, or profile.
 *
 * Based on Designsystemet's Avatar component.
 * @see https://designsystemet.no/en/components/docs/avatar/overview
 */
export const Avatar = (props: AvatarProps) => {
    return <AvatarPrimitive {...props} />;
};
