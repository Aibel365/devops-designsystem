/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Warning from "./warning.jsx.svg?react";

export const WarningIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Warning
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
