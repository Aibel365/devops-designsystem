/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ChevronDown from "./chevronDown.jsx.svg?react";

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ChevronDown
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
