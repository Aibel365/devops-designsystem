import { Chip as ChipPrimitive } from "@digdir/designsystemet-react";
import type { ChipRadioProps as ChipRadioPropsPrimitive, ChipCheckboxProps as ChipCheckboxPropsPrimitive, ChipRemovableProps as ChipRemovablePropsPrimitive, ChipButtonProps as ChipButtonPropsPrimitive } from "@digdir/designsystemet-react";

export type ChipRadioProps = ChipRadioPropsPrimitive;
export const ChipRadio = (props: ChipRadioProps) => {
    return <ChipPrimitive.Radio {...props} />;
};

export type ChipCheckboxProps = ChipCheckboxPropsPrimitive;
export const ChipCheckbox = (props: ChipCheckboxProps) => {
    return <ChipPrimitive.Checkbox {...props} />;
};

export type ChipRemovableProps = ChipRemovablePropsPrimitive;
export const ChipRemovable = (props: ChipRemovableProps) => {
    return <ChipPrimitive.Removable {...props} />;
};

export type ChipButtonProps = ChipButtonPropsPrimitive;
export const ChipButton = (props: ChipButtonProps) => {
    return <ChipPrimitive.Button {...props} />;
};
