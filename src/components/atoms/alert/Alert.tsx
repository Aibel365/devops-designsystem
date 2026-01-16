import { Alert as AlertPrimitive } from "@digdir/designsystemet-react";
import type { AlertProps as AlertPropsPrimitive } from "@digdir/designsystemet-react";

type AlertProps = AlertPropsPrimitive;

/**
 * Alert provides users with information that is especially important for them to see and understand.
 * The component is designed to capture users' attention. The text in the alert should be short and clear.
 *
 * Based on Designsystemet's Alert component.
 * @see https://designsystemet.no/en/components/docs/alert/overview
 */
export const Alert = (props: AlertProps) => {
  return <AlertPrimitive {...props} />;
};
