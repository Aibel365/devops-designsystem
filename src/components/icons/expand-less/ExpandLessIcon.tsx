/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ExpandLess from "./expandLess.jsx.svg?react";

export const ExpandLessIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ExpandLess
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
