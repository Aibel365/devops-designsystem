import { Breadcrumbs as BreadcrumbsPrimitive } from "@digdir/designsystemet-react";
import type { BreadcrumbsProps as BreadcrumbsPropsPrimitive } from "@digdir/designsystemet-react";
import { BreadcrumbsItem } from "./BreadcrumbsItem";

export interface Link {
  displayText: string;
  link: string;
  currentPage?: boolean;
}

type BreadcrumbsProps = BreadcrumbsPropsPrimitive & {
  links: string[] | Link[];
  callBackFunction?: (link: string) => void;
  enableResponsiveFallback?: boolean;
};

/**
 * Breadcrumbs help users understand where they are within a structure and make it possible to navigate back to higher levels.
 *
 * Based on Designsystemet's Breadcrumbs component.
 * @see https://designsystemet.no/en/components/docs/breadcrumbs/overview
 */
export const Breadcrumbs = ({
  links = [],
  callBackFunction,
  enableResponsiveFallback = false,
  ...rest
}: BreadcrumbsProps) => {
  const multipleLinks = links.length > 1;
  const previousOrOnlyLink = multipleLinks ? links[links.length - 2] : links[0];
  const isString = typeof previousOrOnlyLink === "string";
  const prevHref = isString ? previousOrOnlyLink : previousOrOnlyLink.link;
  const prevLabel = isString
    ? previousOrOnlyLink
    : previousOrOnlyLink.displayText;

  return (
    <BreadcrumbsPrimitive {...rest}>
      {(links.length === 1 || (multipleLinks && enableResponsiveFallback)) && (
        <BreadcrumbsPrimitive.Link
          href={prevHref}
          aria-label="Back to previous page"
        >
          {prevLabel}
        </BreadcrumbsPrimitive.Link>
      )}
      {multipleLinks && (
        <BreadcrumbsPrimitive.List>
          {links.map((link, id) => (
            <BreadcrumbsItem
              key={id}
              link={link}
              callBackFunction={callBackFunction}
              isCurrentPage={id === links.length - 1}
            />
          ))}
        </BreadcrumbsPrimitive.List>
      )}
    </BreadcrumbsPrimitive>
  );
};
