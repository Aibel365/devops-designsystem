/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ChevronRight from "./chevronRight.jsx.svg?react";

export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ChevronRight
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
