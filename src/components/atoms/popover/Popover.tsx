import { Popover as PopoverPrimitive } from "@digdir/designsystemet-react";
import type { PopoverProps as PopoverPropsPrimitive, PopoverTriggerContextProps, PopoverTriggerProps } from "@digdir/designsystemet-react";
import { Placement } from "@floating-ui/utils";
import { ReactNode } from "react";

export type PopoverProps = PopoverPropsPrimitive & {
    placement?: Placement;
    triggerContextProps?: PopoverTriggerContextProps;
    triggerProps?: PopoverTriggerProps;
    heading?: ReactNode;
    children?: ReactNode;
};

/**
 * Popovers are used to display more detailed or interactive additional information without taking the user away from the context.
 * They can be used as an extended solution when Tooltips are not sufficient. Popovers are opened by a deliberate user click and can contain both text, links and simple form elements.
 * The content should be short and relevant, and not critical to completing the task.
 *
 * Based on Designsystemet's Popover component.
 * @see https://designsystemet.no/no/components/docs/popover/overview
 */
export const Popover = ({ placement, triggerContextProps, triggerProps, heading, children, ...rest }: PopoverProps) => {
    return (
        <PopoverPrimitive.TriggerContext {...triggerContextProps}>
            <PopoverPrimitive.Trigger {...triggerProps}>{heading}</PopoverPrimitive.Trigger>
            <PopoverPrimitive
                placement={placement}
                {...rest}
            >
                {children}
            </PopoverPrimitive>
        </PopoverPrimitive.TriggerContext>
    );
};
