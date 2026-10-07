/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Sort from "./sort.jsx.svg?react";

export const SortIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Sort
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
