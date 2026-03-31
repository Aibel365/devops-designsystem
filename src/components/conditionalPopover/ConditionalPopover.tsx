import { Popover } from "../../designsystemet/components";

export interface ConditionalPopoverProps {
    condition: boolean;
    popoverContent: React.ReactNode;
    children: React.ReactElement;
}

export const ConditionalPopover = ({ condition, popoverContent, children }: ConditionalPopoverProps) => {
    if (!condition) return children;

    return (
        <Popover.TriggerContext>
            <Popover.Trigger asChild>{children}</Popover.Trigger>
            <Popover placement="left">{popoverContent}</Popover>
        </Popover.TriggerContext>
    );
};
