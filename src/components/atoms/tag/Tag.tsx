import { Tag as TagPrimitive } from "@digdir/designsystemet-react";
import type { TagProps as TagPropsPrimitive } from "@digdir/designsystemet-react";

export type TagProps = TagPropsPrimitive;

/**
 * Tag is a small, interactive element that represents a category or attribute of an item.
 * It is used for labeling or tagging content, such as indicating the status of a task.
 *
 * Based on Designsystemet's Tag component.
 * @see https://designsystemet.no/en/components/docs/tag/overview
 */

export const Tag = (props: TagProps) => {
    return <TagPrimitive {...props} />;
};
