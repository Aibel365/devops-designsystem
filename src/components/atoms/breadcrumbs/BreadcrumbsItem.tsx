import { Breadcrumbs as BreadcrumbsPrimitive } from "@digdir/designsystemet-react";
import type { Link } from "./Breadcrumbs";

interface BreadcrumbItemProps {
  link: string | Link;
  callBackFunction?: (link: string) => void;
  isCurrentPage: boolean;
}

export const BreadcrumbsItem = ({
  callBackFunction,
  link,
  isCurrentPage,
}: BreadcrumbItemProps) => {
  const isString = typeof link === "string";
  const linkValue = isString ? link : link.link;
  const linkLabel = isString ? link : link.displayText;

  return (
    <BreadcrumbsPrimitive.Item>
      {callBackFunction ? (
        <BreadcrumbsPrimitive.Link
          role="button"
          tabIndex={0}
          onClick={() => callBackFunction(linkValue)}
          onKeyDown={(e) =>
            e.key === "Enter" && !isCurrentPage && callBackFunction(linkValue)
          }
        >
          {linkLabel}
        </BreadcrumbsPrimitive.Link>
      ) : (
        <BreadcrumbsPrimitive.Link href={linkValue}>
          {linkLabel}
        </BreadcrumbsPrimitive.Link>
      )}
    </BreadcrumbsPrimitive.Item>
  );
};
