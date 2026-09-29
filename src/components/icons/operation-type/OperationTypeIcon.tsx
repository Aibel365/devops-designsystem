/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import OperationType from "./operationType.jsx.svg?react";

export const OperationTypeIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <OperationType
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
