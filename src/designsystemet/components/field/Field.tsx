import {
    Field as DigdirField,
    FieldCounter as DigdirFieldCounter,
    FieldAffix,
    FieldAffixes,
    FieldDescription,
    type FieldAffixesProps,
    type FieldAffixProps,
    type FieldCounterProps,
    type FieldDescriptionProps,
    type FieldProps
} from "@digdir/designsystemet-react";
import { forwardRef, type ComponentRef } from "react";

export { FieldAffix, FieldAffixes, FieldDescription, type FieldAffixesProps, type FieldAffixProps, type FieldCounterProps, type FieldDescriptionProps, type FieldProps };

// Default English counter texts. Consumers can override them via the `under` and `over` props.
export const FieldCounter = forwardRef<ComponentRef<typeof DigdirFieldCounter>, FieldCounterProps>(function FieldCounter({ under = "%d characters remaining", over = "%d characters too many", ...rest }, ref) {
    return (
        <DigdirFieldCounter
            ref={ref}
            under={under}
            over={over}
            {...rest}
        />
    );
});

const FieldRoot = forwardRef<ComponentRef<typeof DigdirField>, FieldProps>(function Field(props, ref) {
    return (
        <DigdirField
            ref={ref}
            {...props}
        />
    );
});

export const Field = Object.assign(FieldRoot, {
    Affix: FieldAffix,
    Affixes: FieldAffixes,
    Counter: FieldCounter,
    Description: FieldDescription
});
