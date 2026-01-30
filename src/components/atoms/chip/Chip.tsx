import { Chip as ChipPrimitive } from "@digdir/designsystemet-react";
import type {
  ChipRadioProps as ChipRadioPropsPrimitive,
  ChipCheckboxProps as ChipCheckboxPropsPrimitive,
  ChipRemovableProps as ChipRemovablePropsPrimitive,
  ChipButtonProps as ChipButtonPropsPrimitive,
} from "@digdir/designsystemet-react";

export type ChipRadioProps = ChipRadioPropsPrimitive;
const ChipRadio = (props: ChipRadioProps) => {
  return <ChipPrimitive.Radio {...props} />;
};

export type ChipCheckboxProps = ChipCheckboxPropsPrimitive;
const ChipCheckbox = (props: ChipCheckboxProps) => {
  return <ChipPrimitive.Checkbox {...props} />;
};

export type ChipRemovableProps = ChipRemovablePropsPrimitive;
const ChipRemovable = (props: ChipRemovableProps) => {
  return <ChipPrimitive.Removable {...props} />;
};

export type ChipButtonProps = ChipButtonPropsPrimitive;
const ChipButton = (props: ChipButtonProps) => {
  return <ChipPrimitive.Button {...props} />;
};

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
  Button: ChipButton,
};
