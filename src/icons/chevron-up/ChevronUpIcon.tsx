/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ChevronUp from "./chevronUp.jsx.svg?react";

export const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ChevronUp
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
