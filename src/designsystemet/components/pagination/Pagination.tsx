import { Pagination as DigdirPagination, PaginationButton, PaginationItem, PaginationList, type PaginationButtonProps, type PaginationItemProps, type PaginationListProps, type PaginationProps } from "@digdir/designsystemet-react";
import { forwardRef, type ComponentRef } from "react";

export { PaginationButton, PaginationItem, PaginationList, type PaginationButtonProps, type PaginationItemProps, type PaginationListProps, type PaginationProps };

// Default English screen reader label. Consumers can override it via `aria-label`.
const PaginationRoot = forwardRef<ComponentRef<typeof DigdirPagination>, PaginationProps>(function Pagination({ "aria-label": ariaLabel = "Navigate pages", ...rest }, ref) {
    return (
        <DigdirPagination
            ref={ref}
            aria-label={ariaLabel}
            {...rest}
        />
    );
});

export const Pagination = Object.assign(PaginationRoot, {
    Button: PaginationButton,
    Item: PaginationItem,
    List: PaginationList
});
