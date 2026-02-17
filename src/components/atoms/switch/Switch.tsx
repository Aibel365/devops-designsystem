import { Switch as SwitchPrimitive } from "@digdir/designsystemet-react";
import type { SwitchProps as SwitchPropsPrimitive } from "@digdir/designsystemet-react";


export type SwitchProps = SwitchPropsPrimitive;

/**
 * Switch gives users a choice between two alternatives. The switch can either be turned off or on and must always be set with a default choice.
 * @see https://designsystemet.no/en/components/docs/switch/overview
 */



export const Switch = (props: SwitchProps) => {
  return <SwitchPrimitive {...props} />;
};




