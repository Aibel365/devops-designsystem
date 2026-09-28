/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import More from "./more.jsx.svg?react";

export const MoreIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <More
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
