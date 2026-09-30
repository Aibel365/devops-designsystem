/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import NotStartedStatus from "./notStartedStatus.jsx.svg?react";

export const NotStartedStatusIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <NotStartedStatus
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
