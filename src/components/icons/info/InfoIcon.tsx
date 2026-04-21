/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Info from "./info.jsx.svg?react";

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Info
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
