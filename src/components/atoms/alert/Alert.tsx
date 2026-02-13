import { Alert as AlertPrimitive, Heading } from "@digdir/designsystemet-react";
import type { AlertProps as AlertPropsPrimitive, HeadingProps } from "@digdir/designsystemet-react";
import type { ReactNode } from "react";

export type AlertProps = AlertPropsPrimitive & {
  heading?: ReactNode;
  headingLevel?: HeadingProps["level"];
  headingSize?: HeadingProps["data-size"];
};

/**
 * Alert provides users with information that is especially important for them to see and understand.
 * The component is designed to capture users' attention. The text in the alert should be short and clear.
 *
 * Based on Designsystemet's Alert component.
 *
 * @param heading Optional content rendered as a heading at the top of the alert.
 * @param headingLevel Sets the semantic heading level (e.g., 1–6) for the rendered Heading component.
 * @param headingSize Controls the visual size of the heading via the Heading component's `data-size` attribute.
 * @see https://designsystemet.no/en/components/docs/alert/overview
 */
export const Alert = ({ heading, headingLevel, headingSize, children, ...rest }: AlertProps) => {
  return (
    <AlertPrimitive {...rest}>
      {heading && (
        <Heading level={headingLevel} data-size={headingSize}>
          {heading}
        </Heading>
      )}
      {children}
    </AlertPrimitive>
  );
};
