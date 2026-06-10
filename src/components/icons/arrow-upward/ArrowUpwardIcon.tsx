/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ArrowUpward from "./arrowUpward.jsx.svg?react";

export const ArrowUpwardIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ArrowUpward
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
