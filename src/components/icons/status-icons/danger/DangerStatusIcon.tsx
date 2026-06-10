/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import DangerStatus from "./dangerStatus.jsx.svg?react";

export const DangerStatusIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <DangerStatus
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
