/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Search from "./search.jsx.svg?react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Search
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
