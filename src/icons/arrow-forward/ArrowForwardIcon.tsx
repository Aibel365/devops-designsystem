/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ArrowForward from "./arrowForward.jsx.svg?react";

export const ArrowForwardIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ArrowForward
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
