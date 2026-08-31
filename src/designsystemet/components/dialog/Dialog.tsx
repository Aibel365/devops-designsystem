import { DialogBlock, DialogTrigger, DialogTriggerContext, Dialog as DigdirDialog, type DialogBlockProps, type DialogProps, type DialogTriggerContextProps, type DialogTriggerProps } from "@digdir/designsystemet-react";
import { forwardRef } from "react";

export { DialogBlock, DialogTrigger, DialogTriggerContext, type DialogBlockProps, type DialogProps, type DialogTriggerContextProps, type DialogTriggerProps };

// Default English close button text. Consumers can override it via the `closeButton` prop.
const DialogRoot = forwardRef<HTMLDialogElement, DialogProps>(function Dialog({ closeButton = "Close dialog", ...rest }, ref) {
    return (
        <DigdirDialog
            ref={ref}
            closeButton={closeButton}
            {...rest}
        />
    );
});

export const Dialog = Object.assign(DialogRoot, {
    Block: DialogBlock,
    Trigger: DialogTrigger,
    TriggerContext: DialogTriggerContext
});
