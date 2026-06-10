/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Handyman from "./handyman.jsx.svg?react";

export const HandymanIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Handyman
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
