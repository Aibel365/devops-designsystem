/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import WarningFilled from "./warningFilled.jsx.svg?react";

export const WarningIconFilled = (props: SVGProps<SVGSVGElement>) => {
    return (
        <WarningFilled
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
