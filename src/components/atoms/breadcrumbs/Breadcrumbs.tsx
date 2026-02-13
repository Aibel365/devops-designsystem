import { Breadcrumbs as BreadcrumbsPrimitive } from "@digdir/designsystemet-react";
import type { BreadcrumbsProps as BreadcrumbsPropsPrimitive } from "@digdir/designsystemet-react";
import { BreadcrumbsItem } from "./BreadcrumbsItem";

export interface BreadcrumbLink {
  displayText: string;
  link: string;
}

export type BreadcrumbsProps = BreadcrumbsPropsPrimitive & {
  links: string[] | BreadcrumbLink[];
  callBackFunction?: (link: string) => void;
  enableResponsiveFallback?: boolean;
};

/**
 * Breadcrumbs help users understand where they are within a structure and make it possible to navigate back to higher levels.
 *
 * Based on Designsystemet's Breadcrumbs component.
 * 
 * @param links The breadcrumb trail. Accepts `string[]` (where the value is used as both label and href)
 * or `Link[]` with `{ displayText, link }`. The last item is treated as the current page.
 * @param callBackFunction Optional handler invoked when a breadcrumb item is activated.
 * Receives the resolved link href as a string.
 * @param enableResponsiveFallback When `true` and multiple links are provided, renders a
 * single “Back to previous page” link (the second last item) for smaller screens instead of the full breadcrumb list.

 * @see https://designsystemet.no/en/components/docs/breadcrumbs/overview
 */
export const Breadcrumbs = ({ links = [], callBackFunction, enableResponsiveFallback = false, ...rest }: BreadcrumbsProps) => {
  const multipleLinks = links.length > 1;
  const previousOrOnlyLink = multipleLinks ? links[links.length - 2] : links[0];
  const isString = typeof previousOrOnlyLink === "string";
  const prevHref = isString ? previousOrOnlyLink : previousOrOnlyLink.link;
  const prevLabel = isString ? previousOrOnlyLink : previousOrOnlyLink.displayText;

  return (
    <BreadcrumbsPrimitive {...rest}>
      {(links.length === 1 || (multipleLinks && enableResponsiveFallback)) && (
        <BreadcrumbsPrimitive.Link href={prevHref} aria-label="Back to previous page">
          {prevLabel}
        </BreadcrumbsPrimitive.Link>
      )}
      {multipleLinks && (
        <BreadcrumbsPrimitive.List>
          {links.map((link, id) => (
            <BreadcrumbsItem key={id} link={link} callBackFunction={callBackFunction} isCurrentPage={id === links.length - 1} />
          ))}
        </BreadcrumbsPrimitive.List>
      )}
    </BreadcrumbsPrimitive>
  );
};
