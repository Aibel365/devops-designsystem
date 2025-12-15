import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.children}</button>;
};
