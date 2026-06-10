/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ArrorDownward from "./arrowDownward.jsx.svg?react";

export const ArrowDownwardIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ArrorDownward
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
