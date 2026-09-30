/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import WarningStatus from "./warningStatus.jsx.svg?react";

export const WarningStatusIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <WarningStatus
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
