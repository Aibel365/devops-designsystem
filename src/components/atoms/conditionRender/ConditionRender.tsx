import React, { ReactNode } from "react";

export interface IConditionRender {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}
export const ConditionRender: React.FC<IConditionRender> = ({
  condition,
  children,
  fallback = null,
}) => (condition ? children : fallback);
