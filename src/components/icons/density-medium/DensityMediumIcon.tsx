/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import DensityMedium from "./densityMedium.jsx.svg?react";

export const DensityMediumIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <DensityMedium
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
