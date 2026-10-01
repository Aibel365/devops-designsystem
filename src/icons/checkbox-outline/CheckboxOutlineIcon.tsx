/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import CheckboxOutline from "./checkboxOutline.jsx.svg?react";

export const CheckboxOutlineIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CheckboxOutline
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
