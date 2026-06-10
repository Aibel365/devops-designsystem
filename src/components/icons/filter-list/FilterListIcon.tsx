/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import FilterList from "./filterList.jsx.svg?react";

export const FilterListIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <FilterList
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
