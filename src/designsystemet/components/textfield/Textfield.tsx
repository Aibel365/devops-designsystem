import { Textfield as DigdirTextfield, type TextfieldProps } from "@digdir/designsystemet-react";
import { forwardRef } from "react";

export type { TextfieldProps };

// Default English counter texts. Consumers can override them via the `counter` object prop.
const defaultCounterTexts = {
    under: "%d characters remaining",
    over: "%d characters too many"
};

const withDefaultCounterTexts = (counter: TextfieldProps["counter"]): TextfieldProps["counter"] => {
    if (!counter) {
        return counter;
    }

    return typeof counter === "number" ? { limit: counter, ...defaultCounterTexts } : { ...counter, under: counter.under ?? defaultCounterTexts.under, over: counter.over ?? defaultCounterTexts.over };
};

export const Textfield = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextfieldProps>(function Textfield({ counter, ...rest }, ref) {
    return (
        <DigdirTextfield
            ref={ref}
            counter={withDefaultCounterTexts(counter)}
            {...rest}
        />
    );
});
