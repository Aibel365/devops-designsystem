/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import InProgressStatus from "./inProgressStatus.jsx.svg?react";

export const InProgressStatusIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <InProgressStatus
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
