/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Logo from "./aibel-logo.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement>;

export const AibelLogo = (props: IconSvgProps) => {
    // You can now apply Tailwind classes directly to the SVG component
    return <Logo {...props} />;
};
