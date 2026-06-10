/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ErrorFilled from "./errorFilled.jsx.svg?react";

export const ErrorIconFilled = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ErrorFilled
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
