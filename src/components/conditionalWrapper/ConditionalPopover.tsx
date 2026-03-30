import { Popover } from "../../designsystemet/components";

export interface PopoverWrapperProps {
    condition: boolean;
    popoverContent: React.ReactNode;
    children: React.ReactElement;
}

export const PopoverWrapper = ({ condition, popoverContent, children }: PopoverWrapperProps) => {
    if (!condition) return children;

    return (
        <Popover.TriggerContext>
            <Popover.Trigger asChild>{children}</Popover.Trigger>
            <Popover placement="left">{popoverContent}</Popover>
        </Popover.TriggerContext>
    );
};
