/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CompletedStatus from "./completedStatus.jsx.svg?react";

export const CompletedStatusIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CompletedStatus
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
