/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import CheckCircleFilled from "./checkCircleFilled.jsx.svg?react";

export const CheckCircleIconFilled = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CheckCircleFilled
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
