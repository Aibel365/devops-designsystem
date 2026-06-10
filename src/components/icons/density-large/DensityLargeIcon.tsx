/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import DensityLarge from "./densityLarge.jsx.svg?react";

export const DensityLargeIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <DensityLarge
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
