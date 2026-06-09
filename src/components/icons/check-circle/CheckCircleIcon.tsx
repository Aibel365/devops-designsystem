/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import CheckCircle from "./checkCircle.jsx.svg?react";

export const CheckCircleIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CheckCircle
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
