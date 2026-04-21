/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Filter from "./filter.jsx.svg?react";

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Filter
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
