/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ArrowDropdown from "./arrowDropDown.jsx.svg?react";

export const ArrowDropDownIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ArrowDropdown
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
