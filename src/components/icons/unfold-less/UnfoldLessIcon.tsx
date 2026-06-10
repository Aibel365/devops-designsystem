/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import UnfoldLess from "./unfoldLess.jsx.svg?react";

export const UnfoldLessIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <UnfoldLess
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
