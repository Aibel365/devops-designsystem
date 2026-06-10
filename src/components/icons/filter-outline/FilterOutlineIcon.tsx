/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import FilterOutline from "./filterOutline.jsx.svg?react";

export const FilterOutlineIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <FilterOutline
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
