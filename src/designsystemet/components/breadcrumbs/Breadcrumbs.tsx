import { BreadcrumbsItem, BreadcrumbsLink, BreadcrumbsList, Breadcrumbs as DigdirBreadcrumbs, type BreadcrumbsItemProps, type BreadcrumbsLinkProps, type BreadcrumbsListProps, type BreadcrumbsProps } from "@digdir/designsystemet-react";
import { forwardRef, type ComponentRef } from "react";

export { BreadcrumbsItem, BreadcrumbsLink, BreadcrumbsList, type BreadcrumbsItemProps, type BreadcrumbsLinkProps, type BreadcrumbsListProps, type BreadcrumbsProps };

// Default English screen reader label. Consumers can override it via `aria-label`.
const BreadcrumbsRoot = forwardRef<ComponentRef<typeof DigdirBreadcrumbs>, BreadcrumbsProps>(function Breadcrumbs({ "aria-label": ariaLabel = "You are here", ...rest }, ref) {
    return (
        <DigdirBreadcrumbs
            ref={ref}
            aria-label={ariaLabel}
            {...rest}
        />
    );
});

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
    Item: BreadcrumbsItem,
    Link: BreadcrumbsLink,
    List: BreadcrumbsList
});
