import { Textfield as DigdirTextfield, type TextfieldProps } from "@digdir/designsystemet-react";
import { forwardRef } from "react";

export type { TextfieldProps };

// Default English counter texts. Consumers can override them via the `counter` object prop.
export const Textfield = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextfieldProps>(function Textfield({ counter, ...rest }, ref) {
    return (
        <DigdirTextfield
            ref={ref}
            counter={counter ? { under: "%d characters remaining", over: "%d characters too many", ...(typeof counter === "number" ? { limit: counter } : counter) } : counter}
            {...rest}
        />
    );
});
