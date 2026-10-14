/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Copy from "./copy.jsx.svg?react";

export const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Copy
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
