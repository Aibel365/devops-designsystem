/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import DensitySmall from "./densitySmall.jsx.svg?react";

export const DensitySmallIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <DensitySmall
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
