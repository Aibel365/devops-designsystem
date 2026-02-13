import { ChipButton, ChipCheckbox, ChipRadio, ChipRemovable } from "./ChipVariants";

/**
 * Chip are small, interactive components that allow users to control how they want to see content.
 * For example, they can be used to filter categories in a search result and show which filters are active.
 *
 * Based on Designsystemet's Chip component.
 * @see https://designsystemet.no/en/components/docs/chip/overview
 */
export const Chip = {
    Radio: ChipRadio,
    Checkbox: ChipCheckbox,
    Removable: ChipRemovable,
    Button: ChipButton
};
